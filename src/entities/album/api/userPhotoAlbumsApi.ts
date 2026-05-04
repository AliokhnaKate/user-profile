import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/lib/constants/constants";

export const userPhotoAlbumsApi = createApi({
    reducerPath: 'userPhotoAlbumsApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['UserPhotoAlbums'],
    endpoints: (builder) => ({
        getUserPhotoAlbums: builder.query({
            query: (id) => `/users/${id}/albums`,
            providesTags: ['UserPhotoAlbums']
        })
    })
})

export const {useGetUserPhotoAlbumsQuery} = userPhotoAlbumsApi;