import {useEffect, useState} from "react";
import type {PostModel} from "../../../../entities/[entity]/model/types";

const api = 'https://jsonplaceholder.typicode.com/posts';

export const usePostsApi = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

     useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${api}`);
            const data = await response.json();
            setPosts(data)
        }

        fetchPosts();
     }, []);

    return {posts};
}