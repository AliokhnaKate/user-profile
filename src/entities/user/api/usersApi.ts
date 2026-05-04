import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/lib/constants/constants";
import type {UserModel} from "../model/types";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<UserModel[], void>({
            query: () => '/users',
            providesTags: ['Users']
        })
    })
});

export const {useGetUsersQuery} = usersApi;