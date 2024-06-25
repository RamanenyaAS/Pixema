import React, { createContext, useState, useEffect } from "react";

type TContext = [
  string,
  (value: string) => void
];

export const ThemeContext = createContext<TContext>(["", () => { }]);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [topic, setTopic] = useState<string>(() => {
    const storedTheme = localStorage.getItem("topic");
    return storedTheme || "dark";
  });

  const changeTopic = (value: string) => {
    setTopic(value);
    localStorage.setItem("topic", value);
  };

  useEffect(() => {
    localStorage.setItem("topic", topic);
  }, [topic]);

  return (
    <ThemeContext.Provider value={[topic, changeTopic]}>
      {children}
    </ThemeContext.Provider>
  );
};