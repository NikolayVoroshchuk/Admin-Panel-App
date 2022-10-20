import { IThemeContext } from './theme.interface'
import {
	FC,
	PropsWithChildren,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react'

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const getCurrentTheme = useCallback(
		() => window.matchMedia('(prefers-color-scheme: dark)').matches,
		[]
	)

	const addDarkClass = (isDark: boolean) => {
		if (isDark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	useEffect(() => {
		const ls = localStorage.getItem('darkTheme')
		setIsDarkTheme(ls ? Boolean(ls) : getCurrentTheme())
		addDarkClass(ls ? Boolean(ls) : getCurrentTheme())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const toggleDark = useCallback(() => {
		const isDark = !isDarkTheme

		localStorage.setItem('darkTheme', isDark.toString())
		setIsDarkTheme(isDark)

		addDarkClass(isDark)
	}, [isDarkTheme])

	return (
		<ThemeContext.Provider
			value={{
				isDarkTheme,
				toggleDark,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
