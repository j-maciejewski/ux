import { useEffect, type SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useHeader, useTasks } from "~/context";

export default function Home() {
  const { setHeaderText } = useHeader();
  const { addTask } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderText("Add task");
  }, []);

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    addTask({ title, description });
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
        />
        <textarea
          className="rounded-lg border w-full text-lg p-3 [&:user-invalid]:border-red-400"
          name="description"
          placeholder="Task description"
          required
          minLength={3}
        />
        <button className="card">Save task</button>
      </form>
      <Link to="/" className="card mt-auto">
        Back
      </Link>
    </>
  );
}
