import type {PostsWithUserName} from "../../../widgets/PostList/PostsList";
import UsePortal from "./UsePortal";
import styles from '../../../App.module.css';
import UserPostComments from "../../../widgets/PostList/UserPostComments";
import type {UserCommentModel} from "../../../entities/[entity]/model/types";
import {useCallback, useEffect, useRef, useState, type ChangeEvent, type FormEvent} from "react";
import {Form} from "react-router";

interface PostDetailModalProps {
    post: PostsWithUserName,
    onClose: () => void,
    comments: UserCommentModel[]
}

function PostDetailModal({post, onClose, comments}: PostDetailModalProps) {
    //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
    const Portal = UsePortal('portal-root');

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
        <>
            <Portal onClose={onClose}>
                    <Portal.Header onClose={onClose}>
                        <h3>{post.title}</h3>
                    </Portal.Header>

                    <Portal.Body>
                        <p>{post.body}</p>
                        <small>{new Date(post.date as string).toLocaleString()}</small>
                        <UserPostComments
                            comments={commentsPost}
                            showControls={false}
                            hidden={false}
                            expandComment={''}
                            collapseComment={''} />
                    </Portal.Body>

                    <Portal.Footer>
                        <Form onSubmit={handleSubmit}>
                            <textarea ref={textareaRef} value={commentValue} placeholder={'Написать комментарий'} onChange={handleTextAreaClick} />
                            <button type="submit">Отправить</button>
                        </Form>
                    </Portal.Footer>
            </Portal>
        </>
    )
}

export default PostDetailModal;