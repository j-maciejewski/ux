export function detectColorScheme() {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme) return localStorageTheme === "dark" ? "dark" : "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
