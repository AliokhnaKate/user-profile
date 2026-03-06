import {useCallback, useState} from "react";
import type {LoadingStates} from "../../entities/post/models/LoadingStates";
import {Outlet} from "react-router-dom";
import {PostLengthFilter} from "../../features/PostLengthFilter/ui/PostLengthFilter";
import SideNav from "../../widgets/PostList/SideNav";

export interface MainOutletContext {
  loadingStates: LoadingStates;
  updateLoading: (component: keyof LoadingStates, value: boolean) => void;
  filterOptions: {
    shouldFilter: boolean;
    maxLength: number;
    minLength: number;
  }
};

function MainLayout () {
    const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    LoadingRecommendedBooks: true,
    LoadingBooksForChildren: true,
    LoadingDetectivesAndThrillers: true,
    LoadingFantasyBooks: true,
    LoadingFictionBooks: true,
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

    const [isFilterActive, setIsFilterActive] = useState(false);

  const filterOptions = {
    shouldFilter: !isFilterActive,
    maxLength: 15,
    minLength: 1
  };

  const toggle = useCallback(() => {
      setIsFilterActive(prev => !prev);
  }, []);

    return (
        <>
            {/* <PostLengthFilter 
                isActive={isFilterActive}
                onToggle={toggle}
                maxLength={filterOptions.maxLength}
                minLength={filterOptions.minLength}
            /> */}
            <div>
              <SideNav />
              <Outlet context={{ loadingStates, updateLoading, filterOptions }} />
            </div>
        </>
    )
}
export default MainLayout;