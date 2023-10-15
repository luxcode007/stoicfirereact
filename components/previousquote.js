import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function PreviousQuoteButton({ setQuote, setAuthor, previousQuote, style }) {

    const goToPreviousQuote = () => {
        if (previousQuote) {
            setQuote(previousQuote.quote);
            setAuthor(previousQuote.author);
        }
    };

    return (
        <TouchableOpacity style={style} onPress={goToPreviousQuote}>
            <Text>Previous Quote</Text>
        </TouchableOpacity>
    );
}

export default PreviousQuoteButton;
