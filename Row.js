import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Row({person}) {
  return (
    <Text style={styles.row}>{person.lastname}, {person.firstname}</Text>
  )
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 3,
    backgroundColor: '#f5f5f5',
    padding: 5,
  }
});