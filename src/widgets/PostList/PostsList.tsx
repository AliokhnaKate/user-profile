import {useEffect, useMemo, useState} from "react";
import styles from '../../App.module.css';
import {postsApi, useGetUsersQuery} from "../../entities/[entity]/api/Api";
import type {PostModel, UserModel} from "../../entities/[entity]/model/types";
import {useUsers} from "../../entities/user/lib/UseUsers";
import PostCard from "../../entities/post/ui/PostCard";
import {UsePosts} from "../../entities/post/lib/UsePosts";
// import filterByLengthTitle from "../../features/PostLengthFilter/lib/filterByLength";

// interface FilteredProps {    
//   filterOptions?: {
//     shouldFilter?: boolean;               
//     maxLength: number;
//     minLength: number;
//   };
// }

export interface PostsWithUserName extends PostModel {
  userName: string,
}

// function Posts({filterOptions} : FilteredProps) {
function PostsList() {

  // const [users, setUsers] = useState<UserModel[]>(() => {
  //     const cashedUsers = localStorage.getItem('users');
  //     return cashedUsers ? JSON.parse(cashedUsers) : [];
  // });

  // const {data: posts} = useGetPostsQuery();
  // const {data: apiUsers} = useGetUsersQuery();

  // useEffect(() => {
  //     if (apiUsers) {
  //         setUsers(apiUsers);
  //     };
  // }, [apiUsers])

  const {users, getUserById} = useUsers();
  const {posts, getPostsById} = UsePosts();
  
  // const filteredPosts =useMemo(() => {
  //     return filterOptions?.shouldFilter
  //   ? posts!.filter(post => filterByLengthTitle(post, filterOptions))
  //   : posts;
  //   }, [posts]);
    
    const postsWithUserNames: PostsWithUserName[] = useMemo(() => {
      if (!posts || !users) return [];

      if (posts && users) {
        // localStorage.setItem('posts', JSON.stringify(posts));

        return posts.map(post => ({
          ...post,
          userName: getUserById(post.userId)?.name || 'Неизвестный пользователь',
          }))
      };

      return [];
    }, [posts, users, getUserById]);
  
  return (
    <>
      <div className={styles.posts}>
        {postsWithUserNames?.map((post: PostsWithUserName) => (
          <div key={post.id}>
            <PostCard {...post} />
          </div>
          ))
        }
      </div>
    </>
  )
}

export default PostsList;