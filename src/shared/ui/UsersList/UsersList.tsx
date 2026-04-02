import type {UsersListProps, UserModel} from "../../../entities/[entity]/model/types";

function UsersList<T extends UserModel>(props: UsersListProps<T>) {
    const {users, renderUsers} = props;

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    {renderUsers(user)}
                </div>
            ))}
        </>
    )
}

export default UsersList