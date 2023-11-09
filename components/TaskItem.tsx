import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../constants';

type TaskItemProps = {
  id: string;
  text: string;
  onDeleteItem: (id: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ id, text, onDeleteItem }) => {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.taskText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.secondary_background,
  },
  taskText: {
    padding: 8,
    color: 'white',
  },
});
