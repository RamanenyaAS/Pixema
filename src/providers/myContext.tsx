import { createContext } from "react"

type TContext =[
  string,
  (value: string) => void
]

export const ThemeContext = createContext<TContext>(["", () => {}]);