import {useMemo} from "react";
import {usePosts} from "../../../entities/post/lib/usePosts";
import PostCard from "../../../entities/post/ui/PostCard";
import {useParams, useSearchParams} from "react-router-dom";
import type {PostsWithUserName} from "../../../entities/post/model/types";

function UserPostsList () {
  const {id} = useParams();
  const {getPostsByUserId} = usePosts();

  const postsUser = id ? getPostsByUserId(Number(id)) : null;

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const postsUserSearch = useMemo(() => {
    const search = postsUser?.filter(item => item.userName.toLowerCase().includes(query?.toLowerCase()!) || item.title.toLowerCase().includes(query?.toLowerCase()!) || item.body.toLowerCase().includes(query?.toLowerCase()!));
    return search;
  }, [postsUser]);

  return (
    <>
      <div>
        {!query && (
          <div>
            {postsUser?.map((postUser: PostsWithUserName) => (
              <div key={postUser.id}>
                <PostCard {...postUser} />
              </div>
            ))}
          </div>
        )}

        {query && (
          <div>
            {postsUserSearch?.map((postUser: PostsWithUserName) => (
              <div key={postUser.id}>
                <PostCard {...postUser} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default UserPostsList;