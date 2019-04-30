import { useLocalStorage } from "./useLocalStorage"

const DARK = "dark"
const LIGHT = "light"

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", LIGHT)

  const toggleTheme = () => {
    setTheme(theme === DARK ? LIGHT : DARK)
  }

  return [theme, toggleTheme]
}
