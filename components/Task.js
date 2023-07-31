import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "../assets/colors";
import Icons from "../assets/icons"; 
import ShowOptions from "../modals/showOptions";

const Task = ({ title, description, onDelete ,onEdit , taskId }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  const handleEdit = () => {
    onEdit({
      id: taskId,
       title,
      description,
     
    });
    handleCloseOptions();
  };

  const handleFinish = () => {
    setIsCompleted(true);
    handleCloseOptions();
  };
  const getDateText = () => {
    return isCompleted ? "Completed" : "In progress";
  };

  const handleDelete= (taskId) => {
    onDelete(taskId);
    handleCloseOptions();
  };

  return (
    <View
      style={[
        styles.item,
        isCompleted
          ? { backgroundColor: colors.beige, shadowColor: colors.beige }
          : null,
      ]}
    >
      <TouchableOpacity style={styles.littlecircle} onPress={handleShowOptions}>
      {Icons.threeDots("white",20)}
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}{" "}
      </Text>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {description}
      </Text>
      <Text style={styles.date} numberOfLines={1} ellipsizeMode="tail">
        {getDateText()}{" "}
      </Text>
      <ShowOptions
        visible={showOptions}
        onClose={handleCloseOptions}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onFinish={handleFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: colors.blue,
    fontSize: 14,
    textAlign: "right",
    bottom: -13,
    fontFamily:'RobotoMedium'
  },
  description: {
    color: colors.darkPurple,
    fontSize: 12,
    top: -6,
    fontFamily:'RobotoItalic_300',
  },
  item: {
    backgroundColor: colors.watergreen,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    width: 330,
    height: 100,
    borderRadius: 10,
    shadowColor: colors.watergreen,
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    color: colors.darkPurple,
    fontSize: 20,
    top: -13,
    fontFamily:'RobotoMedium'
  },
  littlecircle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.lightPurple,
    position: "absolute",
    top: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default Task;
