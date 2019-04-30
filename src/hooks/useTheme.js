import { useLocalStorage } from "./useLocalStorage"

const DARK = "dark"
const LIGHT = "light"

export const useTheme = () => {
  const hour = new Date().getHours()
  const initialTheme = hour > 20 && hour < 6 ? "dark" : "light"
  const [theme, setTheme] = useLocalStorage("theme", initialTheme)

  const toggleTheme = () => {
    setTheme(theme === DARK ? LIGHT : DARK)
  }

  return [theme, toggleTheme]
}
