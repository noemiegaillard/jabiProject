import React from "react";
import { FlatList } from "react-native";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <Task
          title={item.title}
          description={item.description}
          onDelete={() => onDelete(item.id)}
          onEdit={() => onEdit(item)}
          taskId={item.id}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
