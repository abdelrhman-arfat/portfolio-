"use client";
import { createContext, useState } from "react";

export type TThem = "dark" | "light";

export interface IThemContext {
  them: TThem;
  setThem: React.Dispatch<React.SetStateAction<TThem>>;
}

export const ThemContext = createContext<IThemContext | null>(null);
const Context = ({ children }: { children: React.ReactNode }) => {
  const [them, setThem] = useState<TThem>("dark");

  return (
    <ThemContext.Provider value={{ them, setThem }}>
      {children}
    </ThemContext.Provider>
  );
};

export default Context;
