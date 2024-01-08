
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';

interface UseThemeResult {
	toggleTheme: (saveAction: (theme: Theme) => void) => void;
	theme: Theme;
}

export const useGetDefaultTheme = (): Theme => {

	const themeFlag = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? '';
	if (themeFlag && JSON.stringify(Theme).indexOf(themeFlag) > -1) {
		return themeFlag as Theme;
	}
	return Theme.LIGHT;
};

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);
	//document.body.className = theme;

	const toggleTheme = (saveAction: (theme: Theme) => void) => {
		let newTheme: Theme;
		switch (theme) {
			case Theme.LIGHT:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.LIGHT;
				break;
		}

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme?.(newTheme);
		saveAction?.(newTheme);
	};

	const resultTheme: UseThemeResult = { theme: theme || Theme.LIGHT, toggleTheme };

	return resultTheme;
}
