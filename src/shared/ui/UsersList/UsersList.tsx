import {useSearchParams} from "react-router-dom";
import type {UsersListProps, UserModel} from "../../../entities/[entity]/model/types";
import {useMemo} from "react";

function UsersList<T extends UserModel>(props: UsersListProps<T>) {
    const {users, renderUsers} = props;

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const usersSearch = useMemo(() => {
        if (users) {
            const search = users.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()!));
            return search;
        }
    }, [users, query]);

    return (
        <>
            <div>
                {!query ?
                    <div>
                        {users.map((user) => (
                            <div key={user.id}>
                                {renderUsers(user)}
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                        {usersSearch?.map((user) => (
                            <div key={user.id}>
                                {renderUsers(user)}
                            </div>
                        ))}
                    </div>
                }

            </div>
        </>
    )
}

export default UsersList