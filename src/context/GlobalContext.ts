"use client";

import { createContext } from "react";

export const GlobalContext = createContext({
  theme: "",
  changeTheme: () => {},
  showPanel: true,
  togglePanel: () => {},
  fbkHeight: "auto",
  resizeFbk: () => {},
});
