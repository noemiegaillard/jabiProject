import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const App = () => {
  const newTask = () => {
    console.log("click");
  };

  const DATA = [
    {
      id: "1",
      title: "1 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "2",
      title: "2 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "3",
      title: "3 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "4",
      title: "4 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "5",
      title: "5 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "6",
      title: "6 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "7",
      title: "7 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
    {
      id: "8",
      title: "8 Item",
      description: "bonjour ceci est une description du texte blablabla",
    },
  ];

  const Item = ({ title, description }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Jabi Task</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.circle} >
          <FontAwesome
            name="pencil"
            size={24}
            color="white"
            style={styles.icon}
            onPress={newTask}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,182,153,0.2)", //vert clair
  },
  description: {
    color: "#510059",
    fontSize: 12,
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
  appBarTitle: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: "normal",
    color: "#fff", // blanc
  },
  item: {
    backgroundColor: "rgba(92,179,154,1)", //vert foncé
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    width: 330,
    height: 100,
    borderRadius: "10",
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 8 }, // Offset de l'ombre (décalage)
    shadowOpacity: 0.4, // Opacité de l'ombre (0 - 1)
    shadowRadius: 8, // Rayon de l'ombre (taille de l'effet)
    elevation: 4,
  },
  title: {
    color: "#510059",
    fontSize: 20,
    fontWeight: "500",
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
});

export default App;
