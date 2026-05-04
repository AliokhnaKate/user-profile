import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import {Providers} from './providers';
import {RouterProvider} from './providers/routerProvider/RouterProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider />
    </Providers>
  </React.StrictMode>,
)