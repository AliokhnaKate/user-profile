import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import UserPostsPage from "../../../pages/UserPostsPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import PostsPage from "../../../pages/PostsPage";
import UserPostCommentsPage from "../../../pages/UserPostCommentsPage";
import UsersPage from "../../../pages/UsersPage";
import UserPage from "../../../pages/UserPage";
import MessagesList from "../../../widgets/messages-list/MessagesList";
import UserPhotoAlbumsPage from "../../../pages/UserPhotoAlbumsPage";
import UserPhotos from "../../../widgets/PostList/UserPhotos";
import UserPhotosPage from "../../../pages/UserPhotosPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            //главная страница
            {index: true, element: <Navigate to='/posts' replace/>},
            {path: "/posts", element: <PostsPage />},

            //страница пользователя
            {path: "/users/:id", element: <UserPage />},

            //дочерние ресурсы пользователя
            {path: "/messages", element: <MessagesList />},
            {path: "/users/:id/posts", element: <UserPostsPage />},
            {path: "/users/:id/albums", element: <UserPhotoAlbumsPage />},
            {path: "/albums/:id/photos", element: <UserPhotosPage />},

            {path: "/users/:id/todos", element: <UserTodosPage />},
            {path: "/posts/:id/comments", element: <UserPostCommentsPage />},
            
            
            {path: "/users", element: <UsersPage />},
            
        ],
    },
]);