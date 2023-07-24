import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@react-native-vector-icons';

const Task = ({ task, onDelete, onToggle }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onToggle(task.id)}>
          <FontAwesome
            name={task.completed ? 'check-circle' : 'circle-thin'}
            size={20}
            color={task.completed ? 'green' : 'black'}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 8, fontSize: 18 }}>{task.title}</Text>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={{ marginLeft: 'auto' }}>
          <FontAwesome name="trash-o" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Task;