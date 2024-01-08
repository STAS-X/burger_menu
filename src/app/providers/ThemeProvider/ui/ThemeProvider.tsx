import {
	ThemeContext,
	ThemeContextProps,
} from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { FC, useMemo, useState, ReactNode } from 'react';
import { useGetDefaultTheme } from '@/shared/lib/hooks/useTheme';

// const defaultTheme =
// 	(JSON.parse(localStorage.getItem(USER_LS_KEY) ?? '{}')?.jsonSettings?.theme as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
	children?: ReactNode;
	toTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
	const { children, toTheme } = props;
	//const userTheme = useSettingsByKey('theme') as Theme;
	const defaultTheme = useGetDefaultTheme();

	const commonTheme = toTheme ?? defaultTheme;

	const [theme, setTheme] = useState<Theme>(commonTheme);

	if (document.getElementById('root')) document.getElementById('root')!.className = theme;

	const defaultProps = useMemo<ThemeContextProps>(
		() => ({ theme, setTheme }),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
