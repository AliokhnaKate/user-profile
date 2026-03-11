import type {UserModel} from "../../entities/[entity]/model/types";
import {useGetUsersQuery} from "../../entities/[entity]/api/Api";
import ItemList from "../../shared/ui/ItemList/ItemList";
import UserCard from "../../entities/user/ui/UserCard";
import {useEffect, useState} from "react";

function Users() {
    const [users, setUsers] = useState<UserModel[]>(() => {
        const cashedUsers = localStorage.getItem('users');
        return cashedUsers ? JSON.parse(cashedUsers) : [];
    });

    const {data: apiUsers} = useGetUsersQuery();

    useEffect(() => {
        if (apiUsers) {
            setUsers(apiUsers);
        };
    }, [apiUsers])

    localStorage.setItem('users', JSON.stringify(users));
    
    return (
        <>
        {users?.map((user: UserModel) => (
            <div key={user.id}>
                <UserCard />
            </div>
        ))}
            {/* <div>Пользователи</div>
            <ItemList<UserModel>
                items = {users || []}
                renderItem={(user) => (
                        <UserCard />
                    )}
            /> */}
        </>
    )
}

export default Users;