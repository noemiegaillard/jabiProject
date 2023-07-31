import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "../assets/colors";
import { useCustomFonts } from "../assets/fonts/roboto.js";

const ShowOptions = ({ visible, onClose, onEdit, onDelete, onFinish }) => {

 

  return (
    <View>
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>What do you want to do: </Text>
            <TouchableOpacity onPress={onEdit}>
              <Text style={styles.optionText}>&gt; Edit Task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
              <Text style={styles.optionText}>&gt; Delete Task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onFinish}>
              <Text style={styles.optionText}>&gt; Set Task as Finish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
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
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    backgroundColor: colors.lightPurple,
  },
  modalTitle: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 20,
    fontFamily: "RobotoBoldItalic_700",
  },
  optionText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: "Roboto_300",
  },
  buttonText: {
    top: 10,
    color: colors.darkPurple,
    fontSize: 20,
    fontFamily:'RobotoMedium',
    textAlignVertical: "bottom",
  },
});

export default ShowOptions;
