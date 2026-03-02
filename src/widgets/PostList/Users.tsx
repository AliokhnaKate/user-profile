import type {UserModel} from "../../entities/[entity]/model/types";
import {useGetUsersQuery} from "../../entities/[entity]/api/Api";
import ItemList from "../../shared/ui/ItemList/ItemList";
import UserCard from "../../entities/post/ui/UserCard";
import {useEffect} from "react";

function Users() {

    const {data: users} = useGetUsersQuery();

    useEffect(() => {
            localStorage.setItem('id', JSON.stringify(users))
    }, [users]);
    
    return (
        <>
            <div>Пользователи</div>
            <ItemList<UserModel>
                items = {users || []}
                renderItem={(user) => (
                        <UserCard user={user} />
                    )}
            />
        </>
    )
}

export default Users;