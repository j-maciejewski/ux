import { useEffect } from "react";
import { useHeader } from "~/context/HeaderContext";
import { useTheme } from "~/context/ThemeContext";

export default function () {
  const { setHeaderText } = useHeader();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    setHeaderText("Settings");
  }, []);

  return (
    <>
      <button className="card">Disable notifications</button>
      <button className="card" onClick={toggleTheme}>
        Change theme
      </button>
      <a href="/" className="card">
        Back
      </a>
    </>
  );
}
