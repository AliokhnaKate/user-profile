import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserPostComments from "../widgets/PostList/UserPostComments";

const LoadingPostCommentsUser = withLoading(UserPostComments, {loadingText: '...Загрузка раздела Посты комментариев пользователей', showSpinner: true});

function UserPostCommentsPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPostCommentsUser
                    loading={loadingStates.LoadingPostCommentsUser}
                    updateLoading={(value) => updateLoading('LoadingPostCommentsUser', value)}
                    comments={[]}
                    showControls={true}
                    hidden={true}
                    expandComment={'показать комментарии'}
                    collapseComment={'свернуть'}
            />
        </>
    )
}

export default UserPostCommentsPage;