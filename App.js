import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icons from "./assets/icons"; 
import TaskList from "./components/TaskList";
import colors from "./assets/colors";
import CreateTask from "./modals/createTask";

import { useCustomFonts } from "./assets/fonts/roboto.js";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSaveTask = (newTask) => {
    if (selectedTask) {
      // Si selectedTask existe, c'est une mise à jour de tâche
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id ? { ...task, ...newTask } : task
        )
      );
    } else {
      // Sinon, c'est une nouvelle tâche
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setSelectedTask(null);
    setModalVisible(false);
  };
  
  const handleEditTask = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Jabi Task</Text>
      </View>
      <View style={styles.content}>
      <TaskList tasks={Tasks} onDelete={deleteTask} onEdit={handleEditTask} />
        {!modalVisible && (
          <TouchableOpacity style={styles.circle} onPress={openModal}>
          {Icons.pencil("white",24)}
          
          </TouchableOpacity>
        )}
        <CreateTask
        visible={modalVisible}
        onClose={() => {setSelectedTask(null); setModalVisible(false);}}
        onSave={handleSaveTask}
        selectedTask={selectedTask}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitebackground, 
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.darkPurple,
    height: 70,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: colors.darkPurple,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarTitle: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: "normal",
    color: "white",
  },
  icon: {
    position: "absolute",
    marginRight: 0,
    marginTop: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
