import { useLocalStorage } from "./useLocalStorage"

const COMPACT = "compact"
const VERBOSE = "verbose"

export const useCompactView = (initialViewMode = VERBOSE) => {
  const [viewMode, setViewMode] = useLocalStorage("view", initialViewMode)
  const toggleViewMode = () => {
    setViewMode(viewMode === COMPACT ? VERBOSE : COMPACT)
  }

  return [viewMode, toggleViewMode]
}
