import type {PostsWithUserName} from "../../../widgets/PostList/PostsList";
import UsePortal from "./UsePortal";
import styles from '../../../App.module.css';
import UserPostComments from "../../../widgets/PostList/UserPostComments";
import type {UserCommentModel} from "../../../entities/[entity]/model/types";

interface PostDetailModalProps {
    post: PostsWithUserName,
    onClose: () => void,
    comments: UserCommentModel[]
}

function PostDetailModal({post, onClose, comments}: PostDetailModalProps) {
    //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
    const Portal = UsePortal('portal-root');

    const handleInputClick = (e: React.MouseEvent) => {
      e.stopPropagation()
    };

    return (
        <>
            <Portal onClose={onClose}>
                    <Portal.Header onClose={onClose}>
                        <h3>{post.title}</h3>
                    </Portal.Header>

                    <Portal.Body>
                        <p>{post.body}</p>
                        <small>{new Date(post.date as string).toLocaleString()}</small>
                        <UserPostComments
                            comments={comments}
                            showControls={false}
                            hidden={false}
                            expandComment={''}
                            collapseComment={''} />
                    </Portal.Body>

                    <Portal.Footer>
                            <input type='text' placeholder={'Написать комментарий'} onClick={handleInputClick} />
                            <button>Отправить</button>
                    </Portal.Footer>
            </Portal>
        </>
    )
}

export default PostDetailModal;