import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig.js';
import { doc, getDoc } from 'firebase/firestore';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../styles/styles';

export default function QuoteCard() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'quotes', 'stoicquote00'); // Creating a reference to the specific document
                const docSnap = await getDoc(docRef); // Fetching the document using the reference

                if (docSnap.exists()) { // Checking if document exists
                    setQuote(docSnap.data().quote); // Setting quote state with fetched data
                    setAuthor(docSnap.data().author); // Setting author state with fetched data
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.log('Error getting document:', error);
            }
        };

        fetchData();
    }, []);  // The empty dependency array means this useEffect runs once when the component mounts

    return (
    <Card containerStyle={styles.quoteCard}>
        <Card.Title>{quote}</Card.Title>
        <Text style={styles.authorText}>- {author}</Text>
    </Card>
    );
}
