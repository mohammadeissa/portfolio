import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        border: "1px solid var(--border-color)",
        background: "none",
        color: "var(--text-color)",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
