import { useLocalStorage } from "./useLocalStorage"

const DARK = "dark"
const LIGHT = "light"

export const useTheme = (initialTheme = LIGHT) => {
  const [theme, setTheme] = useLocalStorage("theme", initialTheme)
  const toggleTheme = () => {
    setTheme(theme === DARK ? LIGHT : DARK)
  }

  return [theme, toggleTheme]
}
