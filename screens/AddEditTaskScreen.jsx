import 'react-native-get-random-values';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function AddEditTaskScreen({ navigation, route, tasks, setTasks }) {
  const task = route.params?.task;
  const [name, setName] = useState(task ? task.name : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const saveTask = () => {
    if (task) {
      // Edit existing task
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, name, description } : t
      );
      setTasks(updatedTasks);
    } else {
      // Add new task
      const newTask = { id: uuidv4(), name, description };
      setTasks([...tasks, newTask]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task ? 'Edit Task' : 'Add Task'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveTask}>
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});