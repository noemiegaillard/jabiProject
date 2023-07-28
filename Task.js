import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import colors from "./assets/themes.js";

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
    color: colors.blue,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
  },
  description: {
    color: colors.purpleDark,
    fontSize: 12,
    fontStyle: "italic",
  },
  item: {
    backgroundColor: colors.watergreen, //vert foncé
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    width: 330,
    height: 100,
    borderRadius: "10",
    shadowColor: colors.watergreen,
    shadowOffset: { width: 2, height: 8 }, // Offset de l'ombre (décalage)
    shadowOpacity: 0.9, // Opacité de l'ombre (0 - 1)
    shadowRadius: 8, // Rayon de l'ombre (taille de l'effet)
    elevation: 4,
  },
  title: {
    color: colors.purpleDark,
    fontSize: 20,
    fontWeight: "500",
  }
});

export default Task;


