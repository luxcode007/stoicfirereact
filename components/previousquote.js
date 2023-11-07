import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function PreviousQuoteButton({ updateQuote, previousQuote, style }) {

    const goToPreviousQuote = () => {
        console.log('goToPreviousQuote called', previousQuote);
    if (previousQuote) {
        console.log('Previous quote exists', previousQuote);
        updateQuote(previousQuote.quote, previousQuote.author);
        console.log('Going to previous quote...');
    } else {
        console.log('No previous quote to go to');
    }
    };

    return (
        <TouchableOpacity style={style} onPress={() => {
            console.log("Button was pressed")
            goToPreviousQuote();
        }}>
            <Text>Previous Quote</Text>
        </TouchableOpacity>
    );
}

export default PreviousQuoteButton;