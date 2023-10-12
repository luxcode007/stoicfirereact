import React from 'react';
import { Button } from 'react-native';

function PreviousQuoteButton({ setQuote, setAuthor }) {
    const fetchPreviousQuote = async () => {
        // Logic to fetch the previous quote
        // Once fetched, use setQuote and setAuthor to update the state in the parent component
    };

    return (
        <Button title="Previous Quote" onPress={fetchPreviousQuote} />
    );
}

export default PreviousQuoteButton;
