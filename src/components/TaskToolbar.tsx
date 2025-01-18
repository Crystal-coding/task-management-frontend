import React from "react";
import { Select, SelectItem, Search, Button } from "@carbon/react";


const TaskToolbar: React.FC = () => {
  return (
    <div className="toolbar flex">
      <Select id="select-1" labelText="Task Status">
        <SelectItem value="Option 1" text="All" />
        <SelectItem value="Option 2" text="To Do" />
        <SelectItem value="Option 3" text="In Progress" />
        <SelectItem value="Option 4" text="Completed" />
      </Select>
      <Select id="select-1" labelText="Task Priority">
        <SelectItem value="Option 1" text="All" />
        <SelectItem value="Option 2" text="Low" />
        <SelectItem value="Option 3" text="Medium" />
        <SelectItem value="Option 4" text="High" />
      </Select>
      <div
        style={{
          width: 300,
          height: 40,
          alignSelf: "flex-end"
        }}
      >
        <Search
          closeButtonLabelText="Clear search input"
          id="search-default-1"
          labelText="Label text"
          placeholder="Search Task"
          role="searchbox"
          size="md"
          type="text"
        />
      </div>
      <div style={{ height: 40, boxSizing: "border-box", alignSelf: "flex-end" }}>
        <Button size="md" kind="secondary">Search</Button>
      </div>
    </div>
  );
};

export default TaskToolbar;