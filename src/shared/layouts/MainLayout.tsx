import {useCallback, useState} from "react";
import type {LoadingStates} from "../../entities/post/models/LoadingStates";
import {Outlet} from "react-router-dom";
import SideNav from "../../widgets/PostList/SideNav";
import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";

export interface MainOutletContext {
  loadingStates: LoadingStates;
  updateLoading: (component: keyof LoadingStates, value: boolean) => void;
};

function MainLayout () {
    const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    LoadingUsers: true,
    LoadingAlbumPhotos: true,
    LoadingPostCommentsUser: true,
    LoadingPosts: true,
    LoadingUserAlbums: true,
    LoadingUserPosts: true,
    LoadingUserTodos: true,
    LoadingUser: true
    })

    //ф-я обновления состояния компонента
    const updateLoading = useCallback((component: keyof LoadingStates, value: boolean) => {
    setLoadingStates(prev => ({
        ...prev,
        [component]: value
    }));
    }, []);

    return (
        <>
            <div>
              <Header />
              <SideNav />
              <Outlet context={{ loadingStates, updateLoading}} />
              <Footer />
            </div>
        </>
    )
}
export default MainLayout;