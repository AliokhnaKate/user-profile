import {useEffect, useState} from "react";
import type {PostModel} from "../../../../entities/[entity]/model/types";

// export interface Post {
//     userId: number,
//     id: number,
//     title: string,
//     body: string,
//     date?: string
// }

const api = 'https://jsonplaceholder.typicode.com/posts';

export const usePosts = () => {
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