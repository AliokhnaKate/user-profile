import {UsePosts} from "../../entities/post/lib/UsePosts";
import PostCard from "../../entities/post/ui/PostCard";
import type {PostsWithUserName} from "./PostsList";
import {useParams} from "react-router-dom";

function UserPosts () {
  const {id} = useParams();
  const {getPostsById} = UsePosts();

  const postsUser = id ? getPostsById(Number(id)) : null;

  return (
    <>
      {postsUser?.map((postUser: PostsWithUserName) => (
        <div key={postUser.id}>
          <PostCard {...postUser} />
        </div>
      ))}
    </>
  )
}

export default UserPosts;