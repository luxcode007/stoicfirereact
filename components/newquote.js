import React from 'react';
import { Button } from 'react-native';

function RandomQuoteButton({ setQuote, setAuthor }) {
    const fetchRandomQuote = async () => {
        // Logic to fetch a random quote from Firestore
        // Once fetched, you can use setQuote and setAuthor to update the state in the parent component
    };

    return (
        <Button title="Random Quote" onPress={fetchRandomQuote} />
    );
}

export default RandomQuoteButton;
