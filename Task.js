import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Task = ({ title, description, date }) => {
  return (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
      {description}
    </Text>
    <Text style={styles.date}>{date}</Text>
  </View>)

};

const styles = StyleSheet.create({
  date: {
    color: "#3B25D5",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
  },
  description: {
    color: "#510059",
    fontSize: 12,
    fontStyle: "italic",
  },
  item: {
    backgroundColor: "rgba(92,179,154,1)", //vert foncé
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    width: 330,
    height: 100,
    borderRadius: "10",
    shadowColor: "black",
    shadowOffset: { width: 7, height: 8 }, // Offset de l'ombre (décalage)
    shadowOpacity: 0.4, // Opacité de l'ombre (0 - 1)
    shadowRadius: 8, // Rayon de l'ombre (taille de l'effet)
    elevation: 4,
  },
  title: {
    color: "#510059",
    fontSize: 20,
    fontWeight: "500",
  }
});

export default Task;


