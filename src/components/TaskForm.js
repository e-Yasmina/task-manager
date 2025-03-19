import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { nanoid } from "nanoid";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: nanoid(),
      title,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTitle(""); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">➕ Add Task</button>
    </form>
  );
};

export default TaskForm;
