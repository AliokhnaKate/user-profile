import {useOutletContext} from "react-router-dom";
import {withLoading} from "../../../shared/lib/hoc/WithLoader";
import type {MainOutletContext} from "../../../widgets/mainLayout/model/types";
import PostsList from "../../../widgets/postList/ui/PostsList";

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