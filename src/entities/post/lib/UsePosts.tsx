import {useEffect, useState} from "react"
import type {PostModel} from "../../[entity]/model/types";
import {useGetPostsQuery} from "../../[entity]/api/Api";
import {usePostsWithUsers} from "./UsePostsWithUsers";

export const UsePosts = () => {
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

    const getPostsById = (id: number) => {
        const {posts} = usePostsWithUsers();
        const result = posts.filter(post => post.userId === id);
        return result;
    }

    return {posts, getPostsById};
}