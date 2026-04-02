import {useEffect, useState} from "react";
import type {UserModel} from "../../[entity]/model/types";
import {useGetUsersQuery} from "../../[entity]/api/Api";

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

    // useEffect(() => {
    //     const cashedUsers = localStorage.getItem('users');
    //     if (cashedUsers) return setUsersId(JSON.parse(cashedUsers))
    // }, []);

    const getUserById = (id: number) => {
        const result = users.find(user => user.id === id);
        return result
    }

    return {users, getUserById};
}