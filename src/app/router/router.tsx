import {createBrowserRouter, Navigate} from "react-router-dom";
import PostsPage from "../../pages/postsPage/ui/PostsPage";
import UserPage from "../../pages/userPage/ui/UserPage";
import MessagesList from "../../widgets/messagesList/ui/MessagesList";
import {HelpPage, SecurityHelpPage} from "../../pages/help";
import MainLayout from "../../widgets/mainLayout/ui/MainLayout";
import UserPhotoAlbumsList from "../../widgets/userPhotoAlbumsList/ui/UserPhotoAlbumsList";
import UserPhotosList from "../../widgets/userPhotosList/ui/UserPhotosList";
import UserPostsList from "../../widgets/userPostsList/ui/UserPostsList";
import UserPostCommentsList from "../../widgets/userPostCommentsList/ui/UserPostCommentsList";
import UsersPage from "../../pages/usersPage/ui/UsersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        //MainLayout должен использовать <Outlet /> для отображения дочерних страниц
        element: <MainLayout />,
        children: [
            //главная страница
            {index: true, element: <Navigate to='/posts' replace/>},
            {path: "/posts", element: <PostsPage />, handle: {searchPattern: "/posts", pageType: "posts_list"}},

            //страница пользователя
            {path: "/users/:id", element: <UserPage />, handle: {searchPattern: "/users/:id", pageType: "user_list"}},

            //дочерние ресурсы пользователя
            {path: "/messages", element: <MessagesList />, handle: {searchPattern: "/messages", pageType: "messages_list"}},
            {path: "/users/:id/posts", element: <UserPostsList />, handle: {searchPattern: "/users/:id/posts", pageType: "userPosts_list"}},
            {path: "/users/:id/albums", element: <UserPhotoAlbumsList mode='full' />, handle: {searchPattern: "/users/:id/albums", pageType: "userAlbums_list"}},
            {path: "/albums/:id/photos", element: <UserPhotosList mode='full' />, handle: {searchPattern: "/albums/:id/photos", pageType: "userPhotosAlbum_list"}},

            {path: "/posts/:id/comments", element: <UserPostCommentsList comments={[]} />, handle: {searchPattern: "/posts/:id/comments", pageType: "userComments_list"}},
            
            {path: "/users", element: <UsersPage />, handle: {searchPattern: "/users", pageType: "users_list"}},

            //помощь
            {path: '/securityHelp', element: <SecurityHelpPage />, handle: {searchPattern: "/securityHelp", pageType: "securityHelp_list"}},
            {path: '/help', element: <HelpPage />, handle: {searchPattern: "/help", pageType: "help_list"}},
        ],
    },
]);