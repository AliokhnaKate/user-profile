import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import {Provider} from 'react-redux'
import {store} from './app/providers/store/Store'
import {ThemeProvider} from './shared/lib/theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      
        <App />
      
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)