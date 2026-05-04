import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/lib/constants/constants";

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Comments'],
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `/posts/${id}/comments`,
            providesTags: ['Comments']
        })
    })
})

export const {useGetCommentsQuery} = commentsApi;