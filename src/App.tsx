import {RouterProvider} from 'react-router-dom';
import {router} from './app/providers/router/Router';
import styles from './App.module.css';
import {ThemeSwitcher} from './features/ThemeSwitcher/ui/ThemeSwitcher';

function App() {

  return (
    <>
        <div className={styles.wrapper}>
          <div className={styles.app}>
            <div className={styles.container}>
                <RouterProvider router={router} />
                <ThemeSwitcher/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App;