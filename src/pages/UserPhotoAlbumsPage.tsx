import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserPhotoAlbums from "../widgets/PostList/UserPhotoAlbums";

const LoadingUserAlbums = withLoading(UserPhotoAlbums, {loadingText: '...Загрузка раздела Альбомы пользователя', showSpinner: true});

function UserPhotoAlbumsPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUserAlbums
                    loading={loadingStates.LoadingUserAlbums}
                    updateLoading={(value) => updateLoading('LoadingUserAlbums', value)}
                    mode='full'
            />
        </>
    )
}

export default UserPhotoAlbumsPage;