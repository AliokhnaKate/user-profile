import {useMemo} from "react";
import styles from './PostList.module.css';
import PostCard from "../../../entities/post/ui/PostCard";
import {usePosts} from "../../../entities/post/lib/usePosts";
import {useSearchParams} from "react-router-dom";
import {useUsers} from "../../../entities/user/lib/useUsers";
import type {PostsWithUserName} from "../../../entities/post/model/types";

function PostsList() {

  const {users, getUserById} = useUsers();
  const {posts} = usePosts();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
    
  const postsWithUserNames: PostsWithUserName[] = useMemo(() => {
    if (!posts || !users) return [];

    if (posts && users) {
      return posts.map(post => ({
        ...post,
        userName: getUserById(post.userId)?.name || 'Неизвестный пользователь',
        }))
    };

    return [];
  }, [posts, users, getUserById]);

  const postsSearch: PostsWithUserName[] = useMemo(() => {
     if (postsWithUserNames) {
      const search = postsWithUserNames.filter(item => item.title.toLowerCase().includes(query?.toLowerCase()!) || item.userName.toLowerCase().includes(query?.toLowerCase()!) || item.body.toLowerCase().includes(query?.toLowerCase()!));
      return search;
     }

    return [];
  }, [postsWithUserNames, query]);
  
  return (
    <>
      <div className={styles.posts}>
        {!query && (
          <div>
            {postsWithUserNames?.map((post: PostsWithUserName) => (
              <div key={post.id}>
                <PostCard {...post} />
              </div>
              ))
            }
          </div>
        )}

        {query && (
          <div>
            {postsSearch?.map((post: PostsWithUserName) => (
                <div key={post.id}>
                  <PostCard {...post} />
                </div>
              ))
            }
          </div>
        )}
      </div>
    </>
  )
}

export default PostsList;