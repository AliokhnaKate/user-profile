import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserPosts from "../widgets/PostList/UserPosts";

const LoadingUserPosts = withLoading(UserPosts, {loadingText: '...Загрузка раздела Посты пользователя', showSpinner: true});

function UserPostsPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUserPosts
                    loading={loadingStates.LoadingUserPosts}
                    updateLoading={(value) => updateLoading('LoadingUserPosts', value)}
            />
        </>
    )
}

export default UserPostsPage;