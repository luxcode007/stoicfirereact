import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Card } from 'react-native-elements'; now unnecessary per new card componenet below
import styles from '../styles/styles';
import QuoteCard from '../components/quotecard';
import NewQuoteButton from '../components/newquote';
import PreviousQuoteButton from '../components/previousquote';
import { db } from '../firebaseConfig.js';
import { doc, getDoc } from 'firebase/firestore';

export default function HomePage() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [previousQuote, setPreviousQuote] = useState(null);

     // Define the updateQuote function
    const updateQuote = (newQuote, newAuthor) => {
        // Set the current quote and author as the previousQuote
        setPreviousQuote({ quote, author });

        // Then update the current quote and author with the new ones
        setQuote(newQuote);
        setAuthor(newAuthor);
    };


    useEffect(() => {
        const fetchInitialQuote = async () => {
            const docRef = doc(db, 'quotes', 'stoicquote00');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // Use updateQuote to set the initial quote and author
                updateQuote(docSnap.data().quote, docSnap.data().author);
            } else {
                console.log('No such document!');
            }
        };
        fetchInitialQuote();
    }, []);

    return (
        <View style={styles.container}>
        
        {/* Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton}>
                <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                <Text>Bookmark</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                <Text>My Bookmarks</Text>
                </TouchableOpacity>
            </View>
        
        {/* OLD in-view Quote Card */}
        {/* <Card containerStyle={styles.quoteCard}>
            <Card.Title>“The obstacle is the way.”</Card.Title>
            <Text style={styles.authorText}>- Marcus Aurelius</Text>
        </Card> */}

        {/* NEW component Quote Card, connected to firestore db */}
            <QuoteCard quote={quote} author={author} previousQuote={previousQuote} />
        
            <View style={styles.botNavBar}>
                <PreviousQuoteButton 
                    style={styles.navButton} 
                    updateQuote={updateQuote}
                    previousQuote={previousQuote}
                />
                <NewQuoteButton 
                    style={styles.navButton} 
                    updateQuote={updateQuote} 
                />
            </View>
        </View>
    );
}