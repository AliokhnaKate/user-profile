import styles from './App.module.css';
import {ThemeSwitcher} from './features/ThemeSwitcher/ui/ThemeSwitcher';
import {ThemeProvider} from './shared/lib/theme/ThemeProvider';
import Footer from './widgets/LayoutFooter/Footer';
import Header from './widgets/LayoutHeader/Header';
import {RouterProvider} from 'react-router-dom';
import {router} from './app/providers/router/Router';

function App() {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.container}>
            <Header />
            <RouterProvider router={router} />
            <Footer />
            <ThemeProvider>
                <ThemeSwitcher/>
            </ThemeProvider>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App;