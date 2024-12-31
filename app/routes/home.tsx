import { useEffect } from "react";
import { useHeader, useTasks } from "~/context";

export default function () {
  const { setHeaderText } = useHeader();
  const { tasks } = useTasks();

  useEffect(() => {
    setHeaderText("Task list");
  }, []);

  return (
    <>
      <a href="/settings" className="card">
        Settings
      </a>
      {tasks.map((task) => (
        <a
          href={`/edit/${task.id}`}
          className={`card ${task.completed ? "checked" : ""}`}
        >
          {task.title}
        </a>
      ))}
      <a href="/add" className="card">
        Add task
      </a>
    </>
  );
}
