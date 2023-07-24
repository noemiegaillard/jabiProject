import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"; 

const App = () => {
 
  const click = () => {
    console.log("click");
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Mon Application</Text>
        <FontAwesome name="pencil" size={24} color="white" style={styles.icon} onPress={click} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff', // Couleur de fond de l'AppBar
    height: 60,
    paddingHorizontal: 16,
    justifyContent: "space-between"
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;