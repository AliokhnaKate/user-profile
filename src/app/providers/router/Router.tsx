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
import UserPhotosPage from "../../../pages/UserPhotosPage";
import {HelpPage, SecurityHelpPage} from "../../../pages/help";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            //главная страница
            {index: true, element: <Navigate to='/posts' replace/>},
            {path: "/posts", element: <PostsPage />, handle: {searchPattern: "/posts", pageType: "posts_list"}},

            //страница пользователя
            {path: "/users/:id", element: <UserPage />, handle: {searchPattern: "/users/:id", pageType: "user_list"}},

            //дочерние ресурсы пользователя
            {path: "/messages", element: <MessagesList />, handle: {searchPattern: "/messages", pageType: "messages_list"}},
            {path: "/users/:id/posts", element: <UserPostsPage />, handle: {searchPattern: "/users/:id/posts", pageType: "userPosts_list"}},
            {path: "/users/:id/albums", element: <UserPhotoAlbumsPage />, handle: {searchPattern: "/users/:id/albums", pageType: "userAlbums_list"}},
            {path: "/albums/:id/photos", element: <UserPhotosPage />, handle: {searchPattern: "/albums/:id/photos", pageType: "userPhotosAlbum_list"}},

            {path: "/users/:id/todos", element: <UserTodosPage />, handle: {searchPattern: "/users/:id/todos", pageType: "userTodos_list"}},
            {path: "/posts/:id/comments", element: <UserPostCommentsPage />, handle: {searchPattern: "/posts/:id/comments", pageType: "userComments_list"}},
            
            
            {path: "/users", element: <UsersPage />, handle: {searchPattern: "/users", pageType: "users_list"}},

            //помощь
            {path: '/securityHelp', element: <SecurityHelpPage />, handle: {searchPattern: "/securityHelp", pageType: "securityHelp_list"}},
            {path: '/help', element: <HelpPage />, handle: {searchPattern: "/help", pageType: "help_list"}},
        ],
    },
]);