import {useCallback, useState} from "react";
import type {LoadingStates} from "../../entities/post/models/LoadingStates";
import {Outlet} from "react-router-dom";
import SideNav from "../../widgets/PostList/SideNav";
import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";

export interface MainOutletContext {
  loadingStates: LoadingStates;
  updateLoading: (component: keyof LoadingStates, value: boolean) => void;
//     filterOptions: {
//     shouldFilter: boolean;
//     maxLength: number;
//     minLength: number;
//   }
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

    // const [isFilterActive, setIsFilterActive] = useState(false);

    // const filterOptions = {
    //     shouldFilter: !isFilterActive,
    //     maxLength: 15,
    //     minLength: 1
    // };

    // const toggle = useCallback(() => {
    //     setIsFilterActive(prev => !prev);
    // }, []);

    return (
        <>
            {/* <PostLengthFilter 
                isActive={isFilterActive}
                onToggle={toggle}
                maxLength={filterOptions.maxLength}
                minLength={filterOptions.minLength}
            /> */}
            <div>
              <Header />
              <SideNav />
              <Outlet context={{ loadingStates, updateLoading}} />
              {/* <Outlet context={{ loadingStates, updateLoading, filterOptions}} /> */}
              <Footer />
            </div>
        </>
    )
}
export default MainLayout;