//Запись import { RouterProvider as ReactRouterProvider } означает:
//"Импортируй компонент RouterProvider из библиотеки, но в этом файле называй его ReactRouterProvider" для того, чтобы избежать конфликта имен
import {RouterProvider as ReactRouterProvider} from 'react-router-dom';
import {router} from "../../router/router";

export const RouterProvider = () => {
    return <ReactRouterProvider router={router} />
}