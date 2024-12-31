import { useEffect, useMemo, type SyntheticEvent } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useHeader, useTasks } from "~/context";

export default function Home() {
  const { setHeaderText } = useHeader();
  const { tasks, editTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const editedTask = useMemo(
    () => tasks.find((task) => task.id === parseInt(params.id as string)),
    [params.id]
  );

  useEffect(() => {
    setHeaderText("Edit todo");
  }, []);

  if (!editedTask) return navigate("/");

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const completed = formData.get("completed") === "on";
    console.log(completed);

    editTask({ id: editedTask.id, title, description, completed });
    navigate("/");
  };

  return (
    <>
      <form className="contents" onSubmit={handleSubmit}>
        <input
          className="rounded-lg border w-full text-lg p-3"
          name="title"
          placeholder="Task title"
          required
          minLength={3}
          defaultValue={editedTask.title}
        />
        <textarea
          className="rounded-lg border w-full text-lg p-3 [&:user-invalid]:border-red-400"
          name="description"
          placeholder="Task description"
          required
          minLength={3}
          defaultValue={editedTask.description}
        />
        <label className="flex justify-between w-full text-lg dark:text-white">
          Completed
          <input
            type="checkbox"
            name="completed"
            defaultChecked={editedTask.completed}
          />
        </label>
        <button className="card">Save task</button>
      </form>
      <Link to="/" className="card mt-auto">
        Back
      </Link>
    </>
  );
}
