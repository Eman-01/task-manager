import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
