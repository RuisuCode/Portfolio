import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else if (localStorage.getItem("theme") === "dark") {
      return "dark";
    }
    return "light";
  });
  const hanldeChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
    if (theme === "light") {
      document.querySelector("html")?.classList.add("light");
      localStorage.setItem("theme", theme);
    } else {
      document.querySelector("html")?.classList.remove("light");
    }
  }, [theme]);
  return (
    <label className="swap swap-rotate mx-2  ">
      <input
        type="checkbox"
        onClick={hanldeChangeTheme}
        className="theme-controller"
      />
      <span
        className={`swap-off ${theme === "light" ? " icon-[tabler--moon]" : " icon-[tabler--sun] "}  dark:text-white text-primary md:size-7 xs:size-7`}
      ></span>
      <span
        className={`swap-on ${theme === "light" ? " icon-[tabler--moon]" : " icon-[tabler--sun] "} dark:text-white text-primary  md:size-7 xs:size-7`}
      ></span>
    </label>
  );
}
