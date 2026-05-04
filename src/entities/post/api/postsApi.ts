import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {url} from "../../../shared/lib/constants/constants";
import type {PostModel} from "../model/types";
import {getRandomPastDate} from "../../../shared/lib/utils/randomPastDate";

//функция createApi для создания API
export const postsApi = createApi({
    //Уникальный ключ для reducer, под которым API будет храниться в Redux store
    reducerPath: 'postsApi',
    //Настройка базового запроса
    baseQuery: fetchBaseQuery({baseUrl: url}),
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
                })).sort((a, b) => {
                    // Добавляем getTime() для преобразования Date в число
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                })
            },
            providesTags: ['Posts']
        }),
    }),
});

export const {useGetPostsQuery} = postsApi;