import type {UserModel} from "../../entities/[entity]/model/types";
import {useGetUsersQuery} from "../../entities/[entity]/api/Api";
import {useEffect, useState} from "react";
import UsersList from "../../shared/ui/UsersList/UsersList";
import WriteMessageModal from "../../shared/ui/Modal/WriteMessageModal";
import {useUsers} from "../../entities/user/lib/UseUsers";

function Users() {
    // const [users, setUsers] = useState<UserModel[]>(() => {
    //     const cashedUsers = localStorage.getItem('users');
    //     return cashedUsers ? JSON.parse(cashedUsers) : [];
    // });

    // const {data: apiUsers} = useGetUsersQuery();
    const [userSelected, setUserSelected] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     if (apiUsers) {
    //         setUsers(apiUsers);
    //     };
    // }, [apiUsers])

    // localStorage.setItem('users', JSON.stringify(users));

    const {users} = useUsers();
    
    return (
        <>
            <UsersList<UserModel>
                users = {users.filter(user => user.id !== 4) || []}
                renderUsers={(user: UserModel) => (
                    <div>
                        <h4>{user.name}</h4>
                        <div>
                            <a href={`tel: ${user.phone}`}>позвонить</a>
                            <button onClick={(e) => {
                                    e.stopPropagation()
                                    setUserSelected(user.name)
                                    setUserId(user.id)
                                    setShowModal(true)
                                }
                            }>написать сообщение</button>
                        </div>
                    </div>
                )}
            />

            {showModal && (
                        <WriteMessageModal
                            userSelected={userSelected}
                            userId={userId}
                            onClose={() => setShowModal(false)}
                        />
            )}
        </>
    )
}

export default Users;