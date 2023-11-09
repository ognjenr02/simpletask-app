import { StyleSheet, View, Button, FlatList } from 'react-native';
import React, { FC, useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './constants';

interface Task {
  text: string;
  id: string;
}

const App: FC = () => {
  const [currentTasks, setTasks] = useState<Task[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredText: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id: string) {
    setTasks((currentTasks) => {
      return currentTasks.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Task" onPress={startAddTaskHandler} />
        <TaskInput
          onAddTask={addTaskHandler}
          visible={modalIsVisible}
          onCancel={endAddTaskHandler}
        />
        <View style={styles.taskContainer}>
          <FlatList
            data={currentTasks}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTaskHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.primary_background,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 4,
  },
});

export default App;
