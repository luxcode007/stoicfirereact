import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function NewQuoteButton({ style, setQuote, setAuthor, setPreviousQuote }) {
    const [allQuoteIds, setAllQuoteIds] = useState([]);

    useEffect(() => {
        const fetchAllIds = async () => {
            const querySnapshot = await getDocs(collection(db, 'quotes'));
            const ids = [];
            querySnapshot.forEach((doc) => {
                ids.push(doc.id);
            });
            setAllQuoteIds(ids);
        };
        fetchAllIds();
    }, []);

    const fetchRandomQuote = async () => {
        if (allQuoteIds.length > 0) {
            const randomIndex = Math.floor(Math.random() * allQuoteIds.length);
            const randomId = allQuoteIds[randomIndex];

            const quoteDoc = await getDoc(doc(db, 'quotes', randomId));
            if (quoteDoc.exists()) {
                // capturing current state before updating
                setQuote((currentQuote) => {
                    setPreviousQuote({ quote: currentQuote, author: author }); // Set the current quote as previous
                    return quoteDoc.data().quote;
                });
                setAuthor(quoteDoc.data().author);
                console.log('Fetching random quote...');
                // You may want to communicate this data back to the parent or another component, possibly using a callback.
            }
        }
    }

    return (
        <TouchableOpacity {...props} style={style} onPress={fetchRandomQuote}>
            <Text>New Quote</Text>
        </TouchableOpacity>
    );

}