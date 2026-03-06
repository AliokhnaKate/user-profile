import type {UserModel} from "../../entities/[entity]/model/types";
import {useGetUsersQuery} from "../../entities/[entity]/api/Api";
import ItemList from "../../shared/ui/ItemList/ItemList";
import UserCard from "../../entities/user/ui/UserCard";

function Users() {
    const {data: users} = useGetUsersQuery();
    
    return (
        <>
        {users?.map((user: UserModel) => (
            <div key={user.id}>
                
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