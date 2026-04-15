import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserPhotos from "../widgets/PostList/UserPhotos";

const LoadingAlbumPhotos = withLoading(UserPhotos);

function UserPhotosPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingAlbumPhotos
                    mode='full'
                    loading={loadingStates.LoadingAlbumPhotos}
                    updateLoading={(value) => updateLoading('LoadingAlbumPhotos', value)}
            />
        </>
    )
}

export default UserPhotosPage;