import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../styles/styles';

export default function HomePage() {
  return (
    <View style={styles.container}>
      
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Nav 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Previous Quote</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>New Quote</Text>
        </TouchableOpacity>
      </View>
      
      {/* Quote Card */}
      <Card containerStyle={styles.quoteCard}>
        <Card.Title>“The obstacle is the way.”</Card.Title>
        <Text style={styles.authorText}>- Marcus Aurelius</Text>
      </Card>
      
    </View>
  );
}