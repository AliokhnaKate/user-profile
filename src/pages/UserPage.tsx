import {useOutletContext, useParams} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserCard from "../entities/user/ui/UserCard";
import {useUsers} from "../entities/user/lib/UseUsers";

const LoadingUser = withLoading(UserCard, {loadingText: 'Загрузка пользователя', showSpinner: true})

function UserPage() {
    const{loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();
    const {id} = useParams();
    const {getUserById} = useUsers();

    const user = id ? getUserById(Number(id)) : null;

    return (
        <>
            <LoadingUser
                loading={loadingStates.LoadingUser}
                updateLoading = {(value) => updateLoading('LoadingUser', value)}
                filterOptions = {filterOptions}
                user={user}
            />
        </>
    )
}

export default UserPage;