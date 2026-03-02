// import {useMemo} from "react";
import styles from '../../App.module.css';
import {postsApi} from "../../entities/[entity]/api/Api";
import type {PostModel} from "../../entities/[entity]/model/types";
// import filterByLengthTitle from "../../features/PostLengthFilter/lib/filterByLength";

const {useGetPostsQuery} = postsApi;

// interface FilteredProps {    
//   filterOptions?: {
//     shouldFilter?: boolean;               
//     maxLength: number;
//     minLength: number;
//   };
// }

// function Posts({filterOptions} : FilteredProps) {
function Posts() {
  const {data: posts} = useGetPostsQuery();

  // const filteredPosts =useMemo(() => {
  //     return filterOptions?.shouldFilter
  //   ? posts!.filter(post => filterByLengthTitle(post, filterOptions))
  //   : posts;
  //   }, [posts]);

  return (
    <>
      <div className={styles.posts}>Посты пользователей</div>
      {posts?.map((post: PostModel) => (
        <div key={post.id}>
          <h2>Посты пользователя {post.userId}</h2>
          <div className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <small>{new Date(post.date as string).toLocaleString()}</small>
          </div>
        </div>
      ))}
    </>
  )
}

export default Posts;