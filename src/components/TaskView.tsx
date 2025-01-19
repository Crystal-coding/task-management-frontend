import React from "react";
import "./TaskView.css"
import TaskToolbar from "./TaskToolbar";
import TaskListView from "./TaskListView";
import { Button } from "@carbon/react"

const TaskView: React.FC = () => {
  return (
    <div className="task-view-container flex">
      <TaskToolbar></TaskToolbar>
      <TaskListView></TaskListView>
      <div>
        <Button kind="secondary" style={{ margin: "" }}>Add a Task</Button>
      </div>
    </div >
  );
};

export default TaskView;