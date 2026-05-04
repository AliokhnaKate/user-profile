import {useTheme} from "../../../app/providers/themeProvider/ThemeProvider";

export const ThemeSwitcher = () => {
  const {toggleTheme} = useTheme();
  
  return (
    <>
      <div>
        <button onClick={toggleTheme}>Переключить тему</button>
      </div>
    </>
  )
}