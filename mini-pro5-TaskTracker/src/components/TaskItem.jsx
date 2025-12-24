// src/components/TaskItem.jsx
import { useContext } from "react";
import { TaskContext } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span>{task.text}</span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
