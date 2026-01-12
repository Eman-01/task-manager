import { useEffect, useState } from "react";

export default function TaskForm({ onCreate, initialData }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = e => {
    e.preventDefault();
    onCreate({ title, status });
    setTitle("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">
        {initialData ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
