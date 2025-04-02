"use client";

import React, { useCallback, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("");
  const [showPanel, setShowPanel] = useState(false);
  const [fbkHeight, setFbkHeight] = useState("auto");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : ("light" as string);

    //initialize the theme from localstorage
    document.documentElement.dataset.theme = savedTheme as string;

    //set theme
    setTheme(savedTheme!);
  }, []);

  const changeTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

    // get the html data-theme and set it to the theme
    document.documentElement.dataset.theme = theme;

    // persist theme in the localstorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const togglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const resizeFbk = () => {
    if (fbkHeight === "auto") {
      setFbkHeight("0");
    } else {
      setFbkHeight("auto");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        showPanel,
        togglePanel,
        fbkHeight,
        resizeFbk,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
