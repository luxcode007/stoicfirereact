import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function RandomQuoteButton({ setQuote, setAuthor, setPreviousQuote, style }) {
    const fetchRandomQuote = async () => {
        // Logic to fetch a random quote from Firestore
        // Once fetched, you can use setQuote and setAuthor to update the state in the parent component
        const randomIndex = Math.floor(Math.random() * 10); // Replace YOUR_QUOTE_COUNT with actual count
        const quoteDoc = await getDoc(doc(db, 'quotes', `quote${randomIndex}`));
        if (quoteDoc.exists()) {
            setPreviousQuote({quote: quote, author: author}); // Set the previous quote before updating to the new one
            setQuote(quoteDoc.data().quote);
            setAuthor(quoteDoc.data().author);
        }
    };

    return (
        <TouchableOpacity style={style} onPress={fetchRandomQuote}>
            <Text>New Quote</Text>
        </TouchableOpacity>
    );
}

export default RandomQuoteButton;
