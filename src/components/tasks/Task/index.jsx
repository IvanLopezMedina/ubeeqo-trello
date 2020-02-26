import React from "react";
import { FaTrash } from "react-icons/fa";

function Task({ name, index, deleteTask }) {
  return (
    <div className="task">
      {name}
      <div className="task-options">
        <span onClick={e => deleteTask(e, index)}>
          <FaTrash className="task-option-delete" />
        </span>
      </div>
    </div>
  );
}

export default Task;
