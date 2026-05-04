import {useCallback, useState} from "react";
import type {LoadingStates} from "./types";
import {INITIAL_LOADING_STATES} from "./initialState";

export const useMainLayout = () => {
    const [loadingStates, setLoadingStates] = useState<LoadingStates>(INITIAL_LOADING_STATES)

    //ф-я обновления состояния компонента
    const updateLoading = useCallback((component: keyof LoadingStates, value: boolean) => {
        setLoadingStates(prev => ({
            ...prev,
            [component]: value
        }));
    }, []);

    return {loadingStates, updateLoading}
}