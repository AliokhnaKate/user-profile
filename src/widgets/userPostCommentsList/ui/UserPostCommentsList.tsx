import type {UserCommentModel} from "../../../entities/comment/model/types";

interface UserPostCommentsProps {
    comments: UserCommentModel[],
}

function UserPostCommentsList ({comments}: UserPostCommentsProps) {

    return (
        <div>
            {comments?.map((comment: UserCommentModel) => (
                    <div key={comment.id}>
                        <h5>{comment.email}</h5>
                        <span>{comment.body}</span>
                    </div>
                ))}
        </div>
    )
}

export default UserPostCommentsList;