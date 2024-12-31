import React, { createContext, useState, useContext, useEffect } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

interface TasksContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (values: Pick<Task, "title" | "description">) => void;
  editTask: (values: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks")!)
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({
    title,
    description,
  }: Pick<Task, "title" | "description">) => {
    setTasks(
      tasks.concat({
        id: crypto.getRandomValues(new Uint16Array(1))[0],
        title,
        description,
        completed: false,
      })
    );
  };

  const editTask = ({ id, title, description, completed }: Task) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              id,
              title,
              description,
              completed,
            }
          : task
      )
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, addTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};
