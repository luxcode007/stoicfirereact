import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function NewQuoteButton({ style, setQuote, setAuthor, setPreviousQuote }) {
    const [allQuoteIds, setAllQuoteIds] = useState([]);

    useEffect(() => {
        console.log("useEffect in NewQuoteButton is running");
        const fetchAllIds = async () => {
            const querySnapshot = await getDocs(collection(db, 'quotes'));
            const ids = [];
            querySnapshot.forEach((doc) => {
                ids.push(doc.id);
            });
            setAllQuoteIds(ids);
            console.log(allQuoteIds);
        };
        fetchAllIds();
    }, []);

    const fetchRandomQuote = async () => {
        console.log('fetchRandomQuote is being called');
        if (allQuoteIds.length > 0) {
        const randomIndex = Math.floor(Math.random() * allQuoteIds.length);
        const randomId = allQuoteIds[randomIndex];

        const quoteDoc = await getDoc(doc(db, 'quotes', randomId));
        if (quoteDoc.exists()) {
            const newQuote = quoteDoc.data().quote;
            const newAuthor = quoteDoc.data().author;

            setQuote(currentQuote => {
                // Using another function to ensure we capture the current state
                setAuthor(currentAuthor => {
                    setPreviousQuote({ quote: currentQuote, author: currentAuthor });
                    return newAuthor; // This sets the new author
                });
                return newQuote; // This sets the new quote
            });
            }
        }
    }

    return (
        <TouchableOpacity style={style} onPress={() => {
        console.log("Button was pressed");
        fetchRandomQuote();
        }}>
            <Text>New Quote</Text>
        </TouchableOpacity>
    );

}