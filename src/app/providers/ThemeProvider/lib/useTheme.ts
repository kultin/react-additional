import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeresult {
  theme?: Theme;
  toggleTheme?: () => void;
}

export function useTheme(): UseThemeresult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.BLUE;
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
