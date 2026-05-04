import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/lib/constants/constants";

export const userPhotosApi = createApi({
    reducerPath: 'userPhotosApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['UserPhotos'],
    endpoints: (builder) => ({
        getUserPhotos: builder.query({
            query: (id) => `albums/${id}/photos`,
            providesTags: ['UserPhotos']
        })
    })
})

export const {useGetUserPhotosQuery} = userPhotosApi;