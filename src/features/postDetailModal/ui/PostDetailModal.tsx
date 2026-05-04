import styles from './PostDetailModal.module.css';
import {useCallback, useEffect, useRef, useState, type ChangeEvent, type FormEvent} from "react";
import {Form} from "react-router";
import type {PostsWithUserName} from "../../../entities/post/model/types";
import type {UserCommentModel} from "../../../entities/comment/model/types";
import UserPostCommentsList from "../../../widgets/userPostCommentsList/ui/UserPostCommentsList";
import usePortal from '../../../shared/ui/portal/Portal';

interface PostDetailModalProps {
    post: PostsWithUserName,
    onClose: () => void,
    comments: UserCommentModel[]
}

//features (фича) — интерактивный сценарий (просмотр поста и добавление комментария).
function PostDetailModal({post, onClose, comments}: PostDetailModalProps) {
    //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
    const Portal = usePortal('portal-root');

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [commentValue, setcommentValue] = useState('');
    const [commentsPost, setCommentsPost] = useState<UserCommentModel[]>([]);

    useEffect(() => {
        setCommentsPost(comments);
    }, [comments])

    const handleTextAreaClick = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        if (!e) return;

        const pos = e.target.selectionStart;
        setcommentValue(e.target.value);

        setTimeout(() => {
            textareaRef.current?.focus();
            textareaRef.current?.setSelectionRange(pos, pos);
        }, 0);
        
    }, [commentsPost, commentValue, setCommentsPost, setcommentValue, textareaRef]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const comment: UserCommentModel = {
            postId: post.id,
            id: commentsPost.length + 1,
            name: 'Patrizia',
            email: '5064010@gmail.com',
            body: commentValue
        }

        setCommentsPost(prev => {
            const updated = [...prev, comment];
            return updated;
        })

        setcommentValue('');
    }

    return (
            <Portal onClose={onClose}>
                    <Portal.Header onClose={onClose}>
                        <h3>{post.title}</h3>
                    </Portal.Header>

                    <Portal.Body>
                        <p>{post.body}</p>
                        <small>{new Date(post.date as string).toLocaleString()}</small>
                        <UserPostCommentsList
                            comments={commentsPost}
                        />
                    </Portal.Body>

                    <Portal.Footer>
                        <Form onSubmit={handleSubmit}>
                            <textarea ref={textareaRef} value={commentValue} placeholder={'Написать комментарий'} onChange={handleTextAreaClick} />
                            <button type="submit">Отправить</button>
                        </Form>
                    </Portal.Footer>
            </Portal> 
    )
}

export default PostDetailModal;