import {useEffect, useState} from "react";
import type {UserModel} from "../../[entity]/model/types";

export const useUsers = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        const cashedUsers = localStorage.getItem('users');
        if (cashedUsers) return setUsers(JSON.parse(cashedUsers))
    }, []);

    const getUserById = (id: number) => {
        const result = users.find(user => user.id === id);
        return result
    }

    return {users, getUserById};
}