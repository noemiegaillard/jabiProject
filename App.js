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
import Task from "./Task.js";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };
  const handleSaveTask = () => {
    // Add your logic to save the task with the entered data
    // For example, you can create a new object and add it to the DATA array

    const newTask = {
      id: String(Math.random()), // Generate a random ID (you can use a proper ID generation logic)
      title: title,
      description: description,
      date: date,
    };

    DATA.push(newTask); // Assuming DATA is an array that holds your tasks
    setModalVisible(false);
  };

  const DATA = [
    {
      id: "1",
      title: "1 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "2",
      title: "2 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "3",
      title: "3 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "4",
      title: "4 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "5",
      title: "5 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "6",
      title: "6 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "7",
      title: "7 Item",
      description: "bonjour ceci est une description du texte blablabla",
      date: "jeudi 3 aout",
    },
    {
      id: "8",
      title: "8 Item",
      description:
        "bonjour ceci est une \n description du texte blablablablablablablablablablablablablablabla",
      date: "jeudi 3 aout",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Jabi Task</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Task
              title={item.title}
              description={item.description}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={styles.circle} onPress={openModal}>
          <FontAwesome
            name="pencil"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View>
        <Modal visible={modalVisible} animationType='fade' >
          <View style={styles.modalContainer}>
            {/* Your form or inputs */}
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Date"
              value={date}
              onChangeText={(text) => setDate(text)}
              style={styles.input}
            />

            {/* Save button */}
            <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={styles.retourText}>Retour</Text>
      </TouchableOpacity>
              <Button title="Save" onPress={handleSaveTask} />
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
    backgroundColor: "rgba(78,182,153,0.4)", //vert clair
  },
  descriptionContainer: {
    alignSelf: "flex-end", // Alignement de la description au bas à droite
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#510059", //violet foncé
    height: 70,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: "#510059",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },

  // Styles for the input fields in the modal
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  appBarTitle: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: "normal",
    color: "#fff", // blanc
  },
  icon: {
    position: "absolute",
    marginRight: 0,
    marginTop: 0,
  },
  content: {
    //prends tt la place dans l'appli
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgba(78,182,153,1)",
    fontSize: 24,
    fontWeight: "normal",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  // Styles for the "Retour" text
  retourText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default App;
