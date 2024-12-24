import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskDetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.name}</Text>
      <Text style={styles.description}>{task.description || 'No description available'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});