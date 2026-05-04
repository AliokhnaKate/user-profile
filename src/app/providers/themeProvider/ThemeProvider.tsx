import {useContext, useEffect, type ReactNode} from 'react'
// ThemeContext (если это default export)
// или { ThemeContext } (если named export)
import React from 'react';

//создание контекста
type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

//создание контекста с дефолтными значениями
const ThemeContext=React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

//создаем компонент ThemeProvider, который будет оборачивать компонент App и предоставлять контекст темы
export const ThemeProvider = ({children}: {children: ReactNode}) => {

  const [theme, setTheme] = React.useState<Theme>('light');

  //Применяем тему к body
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev ==='light' ? 'dark' : 'light'))
    } 

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => useContext(ThemeContext);
// export default ThemeContext;