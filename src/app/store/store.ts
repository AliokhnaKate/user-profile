//конфигурация store: Создание и настройка store
import {configureStore} from "@reduxjs/toolkit";
import {postsApi} from "../../entities/post/api/postsApi";
import {commentsApi} from "../../entities/comment/api/commentsApi";
import {userPhotoAlbumsApi} from "../../entities/album/api/userPhotoAlbumsApi";
import {userPhotosApi} from "../../entities/photo/api/userPhotosApi";
import {usersApi} from "../../entities/user/api/usersApi";

//Создание store
export const store = configureStore({
    //Настройка reducer'ов
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [userPhotoAlbumsApi.reducerPath]: userPhotoAlbumsApi.reducer,
        [userPhotosApi.reducerPath]: userPhotosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    //Конфигурация middleware
    middleware: (getDefaultMiddleware)  => 
        getDefaultMiddleware().concat(
            postsApi.middleware,
            commentsApi.middleware,
            userPhotoAlbumsApi.middleware,
            userPhotosApi.middleware,
            usersApi.middleware
            ),
});