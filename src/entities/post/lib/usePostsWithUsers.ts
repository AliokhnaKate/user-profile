import {useMemo} from "react";
import {usePosts} from "./usePosts";
import {useUsers} from "../../user/lib/useUsers";
import type {PostsWithUserName} from "../model/types";

export const usePostsWithUsers = () => {
    const {users, getUserById} = useUsers();
    const {posts} = usePosts();

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