import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <div className="TaskFormWrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            value={title}
            onChange={updateTitle}
            placeholder="Enter title"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TaskForm;
