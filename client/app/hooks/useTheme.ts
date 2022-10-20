import { ThemeContext } from 'providers/theme-provider/ThemeProvider'
import { useContext } from 'react'

export const useTheme = () => useContext(ThemeContext)
