import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants';

interface TaskInputProps {
  visible: boolean;
  onAddTask: (task: string) => void;
  onCancel: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
  visible,
  onAddTask,
  onCancel,
}) => {
  const [enteredText, setText] = useState('');

  const taskInputHandler = (enteredText: string) => {
    setText(enteredText);
  };

  const addTaskHandler = () => {
    onAddTask(enteredText);
    setText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/task.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your task for today!"
          onChangeText={taskInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    backgroundColor: Colors.primary_background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary_border,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.primary_border,
    width: '100%',
    padding: 8,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
