import {useState} from "react";
import WriteMessageModal from "../../../features/writeMessageModal/ui/WriteMessageModal";
import {useUsers} from "../../../entities/user/lib/useUsers";
import type {UserModel} from "../../../entities/user/model/types";
import SearchableList from "../../../shared/ui/searchableList/SearchableList";

function UsersList() {
    const [userSelected, setUserSelected] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const {users} = useUsers();
    
    return (
        <>
            <SearchableList<UserModel>
                items = {users.filter(user => user.id !== 4) || []}
                renderItems={(user: UserModel) => (
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

export default UsersList;