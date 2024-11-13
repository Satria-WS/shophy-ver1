import { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const Toogle = () => {
  // State to manage the theme, defaulting to "light" if not set in localStorage
  // const [theme, setTheme] = useState(() => {
  //   // Check localStorage to persist theme preference across page reloads
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme ? savedTheme : "light";
  // });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Get the root HTML element (document.documentElement) to add or remove the dark class
  const rootElement = document.documentElement;

  // Effect hook to apply the theme when the state changes
  useEffect(() => {
    if (theme === "dark") {
      // Apply dark mode class to the root element and save to localStorage
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // Remove dark mode class and save light mode to localStorage
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // This effect runs when the 'theme' state changes

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    // If the current theme is light, change it to dark
    if (theme === "light") {
      setTheme("dark");
    } else {
      // If the current theme is not light (it must be dark), change it to light
      setTheme("light");
    }
  };

  return (
    <div className="relative">
      {/* Light mode button (visible when dark mode is not active) */}
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer  transition-opacity duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark mode button (visible when dark mode is active) */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={toggleTheme}
        className="w-12 cursor-pointer  transition-opacity duration-300"
      />
    </div>
  );
};

export default Toogle;
