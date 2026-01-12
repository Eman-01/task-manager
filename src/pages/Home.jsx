import { useEffect, useState } from "react";
import { fetchTasks, createTask, deleteTask, updateTask } from "../api/tasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  async function loadTasks() {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate(task) {
    await createTask(task);
    loadTasks();
  }

   async function handleEdit(task) {
    setEditingTask(task);
  }

  async function handleUpdate(updatedData) {
    await updateTask(editingTask.id, updatedData);
    setEditingTask(null);
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="page">
      <div className="content">
      <h1>Task Management System</h1>
      <TaskForm onCreate={editingTask ? handleUpdate : handleCreate}
        initialData={editingTask} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
    
  );
}
