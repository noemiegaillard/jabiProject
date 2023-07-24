import React from 'react';
import { View, FlatList } from 'react-native';


const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task task={item} onDelete={onDelete} onToggle={onToggle} />
        )}
      />
    </View>
  );
};

export default TaskList;
