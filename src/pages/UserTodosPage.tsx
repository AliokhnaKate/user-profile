import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserTodos from "../widgets/PostList/UserTodos";

const LoadingUserTodos = withLoading(UserTodos, {loadingText: '...Загрузка раздела Задачи пользователя', showSpinner: true});

function UserTodosPage () {
    const {loadingStates, updateLoading} = useOutletContext<MainOutletContext>();
    // const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();
    
    return (
        <>
            <LoadingUserTodos
                    loading={loadingStates.LoadingUserTodos}
                    updateLoading={(value) => updateLoading('LoadingUserTodos', value)}
                    // filterOptions={filterOptions}
            />
        </>
    )
}

export default UserTodosPage;