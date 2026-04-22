import type {UserCommentModel} from "../../entities/[entity]/model/types";

interface UserPostCommentsProps {
  comments: UserCommentModel[],
}

function UserPostComments ({comments}: UserPostCommentsProps) {

  return (
    <>
        {comments?.map((comment: UserCommentModel) => (
            <div key={comment.id}>
              <h5>{comment.email}</h5>
              <span>{comment.body}</span>
            </div>
          )
        )}
    </>
  )
}

export default UserPostComments;