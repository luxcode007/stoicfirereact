import React from 'react';
import { Button } from 'react-native';

function PreviousQuoteButton({ setQuote, setAuthor, previousQuote }) {

    const goToPreviousQuote = () => {
        if (previousQuote) {
            setQuote(previousQuote.quote);
            setAuthor(previousQuote.author);
        }
    };

    return (
        <Button title="Previous Quote" onPress={goToPreviousQuote} />
    );
}

export default PreviousQuoteButton;
