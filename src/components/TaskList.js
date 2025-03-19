import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../features/tasks/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => dispatch(toggleTaskCompletion(task.id))}>
                {task.title} {task.completed ? "✅" : "❌"}
              </span>
              <button onClick={() => dispatch(deleteTask(task.id))}>❌ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
