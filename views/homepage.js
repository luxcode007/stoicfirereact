import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Card } from 'react-native-elements'; now unnecessary per new card componenet below
import styles from '../styles/styles';
import QuoteCard from '../components/quotecard';
import NewQuoteButton from '../components/newquote';
import PreviousQuoteButton from '../components/previousquote';

export default function HomePage() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [previousQuote, setPreviousQuote] = useState(null);

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
                    setQuote={setQuote} 
                    setAuthor={setAuthor} 
                    setPreviousQuote={setPreviousQuote}
                />
                <NewQuoteButton 
                    style={styles.navButton} 
                    setQuote={setQuote} 
                    setAuthor={setAuthor} 
                />
            </View>
        </View>
    );
}