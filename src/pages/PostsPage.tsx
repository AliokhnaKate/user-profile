import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import PostsList from "../widgets/PostList/PostsList";

const LoadingPosts = withLoading(PostsList, {loadingText: '...Загрузка раздела Посты всех пользователей', showSpinner: true});

function PostsPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPosts
                    loading={loadingStates.LoadingPosts}
                    updateLoading={(value) => updateLoading('LoadingPosts', value)}
            />
        </>
    )
}

export default PostsPage;