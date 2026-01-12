import { useState } from "react";

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = e => {
    e.preventDefault();
    onCreate({ title, status });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
