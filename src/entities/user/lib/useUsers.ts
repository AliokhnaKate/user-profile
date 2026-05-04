import {useEffect, useState} from "react";
import type {UserModel} from "../model/types";
import {useGetUsersQuery} from "../api/usersApi";

export const useUsers = () => {
    const [users, setUsers] = useState<UserModel[]>(() => {
      const cashedUsers = localStorage.getItem('users');
      return cashedUsers ? JSON.parse(cashedUsers) : [];
    });

    const {data: apiUsers} = useGetUsersQuery();

    useEffect(() => {
      if (apiUsers) {
          setUsers(apiUsers);
      };
    }, [apiUsers]);

    localStorage.setItem('users', JSON.stringify(users));

    const getUserById = (id: number) => {
        const result = users.find(user => user.id === id);
        return result
    }

    return {users, getUserById};
}