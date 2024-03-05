import { useEffect } from "react";
import { useStickyState } from "../hooks";
import HeaderSearch from "./header-search";

export default function Header() {
  const [theme, setTheme] = useStickyState("dark", "theme-mode");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  });

  function changeTheme() {
    setTheme((prev: string) => {
      return prev === "dark" ? "light" : "dark";
    });
  }

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="title">devfinder</h1>
        {theme === "dark" ? (
          <div className="header-icon" onClick={changeTheme}>
            <span>Light</span>
            <img src="/light.svg" alt="Light" />
          </div>
        ) : (
          <div className="header-icon" onClick={changeTheme}>
            <span>Dark</span>
            <img src="/dark.svg" alt="Dark" />
          </div>
        )}
      </div>
      <div className="header-bottom">
        <HeaderSearch />
      </div>
    </header>
  );
}
