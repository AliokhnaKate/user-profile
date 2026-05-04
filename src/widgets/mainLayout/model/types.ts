export interface LoadingStates {
    LoadingUsers: boolean;
    LoadingPosts: boolean;
    LoadingUser: boolean
}

export interface MainOutletContext {
    loadingStates: LoadingStates;
    updateLoading: (component: keyof LoadingStates, value: boolean) => void;
};