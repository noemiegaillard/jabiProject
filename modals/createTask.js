import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import colors from "../assets/colors.js";

const CreateTask = ({ visible, onClose, onSave, selectedTask }) => {
  const [title, setTitle] = useState(selectedTask ? selectedTask.title : "");
  const [description, setDescription] = useState(
    selectedTask ? selectedTask.description : ""
  );

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [selectedTask]);

  const handleSaveTask = () => {
    if (title.trim() === "") {
      alert("You have to declare a title.");
      return;
    }

    const newTask = {
      id: String(Math.random()),
      title: title,
      description: description,
    };
    onSave(newTask);

    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <View>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedTask ? "Edit Task :" : "Create a New Task :"}  </Text>

            {/* Your form or inputs */}
            <TextInput
              placeholder=" Write the title... *"
              color={colors.whitebackground}
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={styles.input}
              placeholderTextColor="#4A4A4A"
            />
            <TextInput
              color={colors.whitebackground}
              placeholder="Write a description..."
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={styles.input}
              placeholderTextColor="#4A4A4A"
            />

            <Text style={styles.informationText}>*: mandatory to fill </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveTask}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: colors.lightPurple,
    borderRadius: 10,
  },
  modalTitle: {
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 20,
    fontFamily: "RobotoBoldItalic_700",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonText: {
    top: 10,
    color: colors.darkPurple,
    fontSize: 20,
    fontFamily: "RobotoMedium",
    textAlignVertical: "bottom",
  },
  informationText: {
    color: "#4A4A4A",
    fontSize: 12,
  },
});

export default CreateTask;
