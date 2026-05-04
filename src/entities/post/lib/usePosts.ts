import {useEffect, useState} from "react";
import {usePostsWithUsers} from "./usePostsWithUsers";
import type {PostModel} from "../model/types";
import {useGetPostsQuery} from "../api/postsApi";

export const usePosts = () => {
    const [posts, setPosts] = useState<PostModel[]>(() => {
        const cashedPosts = localStorage.getItem('posts');
        return cashedPosts ? JSON.parse(cashedPosts) : [];
    });

    const {data: apiPosts} = useGetPostsQuery();

    useEffect(() => {
        if (apiPosts) {
            setPosts(apiPosts);
        };
    }, [apiPosts]);

    localStorage.setItem('posts', JSON.stringify(posts));

    const getPostsByUserId = (id: number) => {
        const {posts} = usePostsWithUsers();
        const result = posts.filter(post => post.userId === id);
        return result;
    }

    return {posts, getPostsByUserId};
}