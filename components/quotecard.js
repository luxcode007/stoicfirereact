import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import db from '../firebaseConfig.js';  // Adjust the path

export default function QuoteCard() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const doc = await db.collection('quotes').doc('your-document-id').get();
            const data = doc.data();
            setQuote(data.quote);
            setAuthor(data.author);
        } catch (error) {
            console.log('Error getting document:', error);
        }
        };

        fetchData();
    }, []);  // The empty dependency array means this useEffect runs once when the component mounts

    return (
        <View>
        <Text>{quote}</Text>
        <Text>{author}</Text>
        </View>
    );
}
