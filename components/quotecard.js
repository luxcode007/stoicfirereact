import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../styles/styles';

export default function QuoteCard({ quote, author}) {

    return (
    <Card containerStyle={styles.quoteCard}>
        <Card.Title>{quote}</Card.Title>
        <Text style={styles.authorText}>- {author}</Text>
    </Card>
    );
}
