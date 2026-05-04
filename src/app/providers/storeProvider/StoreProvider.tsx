import {Provider} from "react-redux";
import {store} from "../../store/store";

interface StoreProviderProps {
    children: React.ReactNode;
}

//React-компонент, который подключает store к React, те просто передает store дальше
export const StoreProvider = ({children}: StoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>
}