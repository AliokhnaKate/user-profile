import {useOutletContext} from "react-router-dom";
import {withLoading} from "../../../shared/lib/hoc/WithLoader";
import type {MainOutletContext} from "../../../widgets/mainLayout/model/types";
import UsersList from "../../../widgets/usersList/ui/UsersList";

const LoadingUsers = withLoading(UsersList, {loadingText: 'Загрузка пользователей', showSpinner: true})

function UsersPage() {
    const{loadingStates, updateLoading} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUsers
                loading={loadingStates.LoadingUsers}
                updateLoading = {(value) => updateLoading('LoadingUsers', value)}
            />
        </>
    )
}

export default UsersPage;