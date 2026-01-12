export default function TaskItem({ task, onDelete }) {
  const statusColors = {
    pending: "gray",
    in_progress: "orange",
    completed: "green",
  };

  return (
    <li style={{ borderLeft: `5px solid ${statusColors[task.status]}`, padding: "8px" }}>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
