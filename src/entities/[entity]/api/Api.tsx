import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/constants/constants";
import type {PostModel, UserModel} from "../model/types";
import {getRandomPastDate} from "../../../shared/lib/utils/RandomPastDate";

//функция createApi для создания API
export const postsApi = createApi({
    //Уникальный ключ для reducer, под которым API будет храниться в Redux store
    reducerPath: 'postsApi',
    //Настройка базового запроса
    baseQuery: fetchBaseQuery({baseUrl: url }),
    // Объявляем ВСЕ типы тегов, которые будут использоваться в этом API
    tagTypes: ['Posts'],
    //Определение эндпоинтов
    endpoints: (builder) => ({
        //builder.query - создает GET-запрос (для получения данных)
        //Когда создается endpoint с builder.query(), RTK Query автоматически генерирует хук с именем use + НазваниеЭндпоинта + Query: useGetPostsQuery
        getPosts: builder.query<PostModel[], void>({
            ///функция, возвращающая endpoint
            query: () => '/posts',
            transformResponse: (responce: PostModel[]) => {
                return responce.map((post) => ({
                    ...post,
                    date: getRandomPastDate()
                }))
            },
            providesTags: ['Posts']
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;

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

export const { useGetCommentsQuery } = commentsApi;

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Albums'],
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: (id) => `/albums/${id}/photos`,
            providesTags: ['Albums']
        })
    })
})

export const { useGetAlbumsQuery } = albumsApi;

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (id) => `users/${id}/todos`,
            providesTags: ['Todos']
        })
    })
});

export const { useGetTodosQuery } = todosApi;

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

export const { useGetUsersQuery } = usersApi;