import type {UserCommentModel} from "../../entities/[entity]/model/types";
import {CommentList} from "../CommentList/ui/CommentList";

interface UserPostCommentsProps {
  comments: UserCommentModel[],
  showControls: boolean,
  hidden: boolean,
  collapseComment: string,
  expandComment: string,
}

function UserPostComments ({
  comments,
  showControls,
  hidden,
  collapseComment,
  expandComment,
  }: UserPostCommentsProps) {

  return (
    <>
      {/* <CommentList
        collapseComment={collapseComment}
        expandComment={expandComment}
        hidden={showControls ? hidden : false}
        showControls={showControls}
      > */}
        {comments?.map((comment: UserCommentModel) => (
            <div key={comment.id}>
              <h5>{comment.email}</h5>
              <span>{comment.body}</span>
            </div>
          )
        )}
      {/* </CommentList> */}
    </>
  )
}

export default UserPostComments;