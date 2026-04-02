import {configureStore} from "@reduxjs/toolkit";
import {commentsApi, postsApi, todosApi, userPhotoAlbumsApi, userPhotosApi, usersApi} from "../../../entities/[entity]/api/Api";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [userPhotoAlbumsApi.reducerPath]: userPhotoAlbumsApi.reducer,
        [userPhotosApi.reducerPath]: userPhotosApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware)  => 
        getDefaultMiddleware().concat(
            postsApi.middleware,
            commentsApi.middleware,
            userPhotoAlbumsApi.middleware,
            userPhotosApi.middleware,
            todosApi.middleware,
            usersApi.middleware
            ),
});