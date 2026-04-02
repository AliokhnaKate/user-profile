import {useMemo} from "react";
import {useUsers} from "../../user/lib/UseUsers";
import type {PostsWithUserName} from "../../../widgets/PostList/PostsList";
import {UsePosts} from "./UsePosts";

export const usePostsWithUsers = () => {
    const {users, getUserById} = useUsers();
    const {posts} = UsePosts();

    const postsWithUserNames = useMemo<PostsWithUserName[]>(() => {
        if (!posts || !users) return [];

        return posts.map(post => ({
            ...post,
            userName: getUserById(post.userId)?.name || 'Неизвестный пользователь',
        }))
    }, [posts, users, getUserById]);

    return {
        posts: postsWithUserNames
    }
}