import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Task from "./Task";
import colors from "./assets/themes.js";
import { useCustomFonts } from './assets/fonts.js';



const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const handleSaveTask = () => {
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      alert("You have one field or more that isn't been fill.");
      return;
    }
    const newTask = {
      id: String(Math.random()), // Generate a random ID (you can use a proper ID generation logic)
      title: title,
      description: description,
      date: date,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setModalVisible(false);
    setTitle("");
    setDescription("");
    setDate("");
  };
  const [Tasks, setTasks] = useState([]);
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
        <FlatList
          data={Tasks}
          renderItem={({ item }) => (
            <Task
              title={item.title}
              description={item.description}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {!modalVisible && (
          <TouchableOpacity style={styles.circle} onPress={openModal}>
            <FontAwesome
              name="pencil"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <View>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Create a new Task : </Text>

                {/* Your form or inputs */}
                <TextInput
                  placeholder="Title"
                  color={colors.whitebackground}
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                  style={styles.input}
                />
                <TextInput
                  color={colors.whitebackground}
                  placeholder="Description"
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                  style={styles.input}
                />
                <TextInput
                  color={colors.whitebackground}
                  placeholder="Date"
                  value={date}
                  onChangeText={(text) => setDate(text)}
                  style={styles.input}
                />

                {/* Save button */}
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      setTitle("");
                      setDescription("");
                      setDate("");
                    }}
                  >
                    <Text style={styles.buttonText}>Retour</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSaveTask}>
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitebackground, //vert clair
  },
  descriptionContainer: {
    alignSelf: "flex-end", // Alignement de la description au bas à droite
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.purpleDark, //violet foncé
    height: 70,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: colors.purpleDark,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: colors.purpleLight,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    textAlignVertical: "bottom",
  },
  modalTitle: {
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 20,
    fontFamily:'RobotoBoldItalic_700'
  },
});

export default App;
