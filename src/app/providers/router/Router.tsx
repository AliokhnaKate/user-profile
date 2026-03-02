import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import UserPostsPage from "../../../pages/UserPostsPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import PostsPage from "../../../pages/PostsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage";
import UserPostCommentsPage from "../../../pages/UserPostCommentsPage";
import UsersPage from "../../../pages/UsersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {index: true, element: <Navigate to='/posts' replace/>},

            {path: "/posts", element: <PostsPage />},
            {path: "/posts/:id/comments", element: <UserPostCommentsPage />},
            {path: "/albums/:id/photos", element: <AlbumPhotosPage />},
            {path: "/users", element: <UsersPage />},
            {path: "/users/:id/posts", element: <UserPostsPage />},
            {path: "/users/:id/albums", element: <UserAlbumsPage />},
            {path: "/users/:id/todos", element: <UserTodosPage />},
        ],
    },
]);