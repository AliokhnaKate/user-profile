import {FaRegComment} from 'react-icons/fa';
import styles from '../../../app/App.module.css';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import PostDetailModal from '../../../features/postDetailModal/ui/PostDetailModal';
import type {PostsWithUserName} from '../model/types';
import {commentsApi} from '../../comment/api/commentsApi';

const {useGetCommentsQuery} = commentsApi;

function PostCard (post: PostsWithUserName) {
    const [showModal, setShowModal] = useState(false);
    const {data: commentsPosts} = useGetCommentsQuery(post.id);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div key={post.id}>
                {/* NavLink - это навигация между страницами */}
                <NavLink key={post.userId} to={`/users/${post.userId}`}>
                    <h2>{post.userName}</h2>
                </NavLink>
    
                <div className={styles.post}>
                    <h4>{post.title}</h4>
                    <span onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? post.body : post.body.slice(0, 10)}
                        {!isExpanded && '...показать ещё'}
                    </span>

                    <div>
                        <span onClick={(e) => {
                                    e.stopPropagation()
                                    setShowModal(true)
                                    }
                                }>
                            показать комментарии
                        </span>
                    </div>
                    <div>
                        <span onClick={(e) => {
                                    e.stopPropagation()
                                    setShowModal(true)
                                    }
                                }>
                            <FaRegComment size={14} />
                        </span>
                        <small>{new Date(post.date as string).toLocaleString()}</small>
                    </div>

                    {showModal && (
                        <PostDetailModal
                            post={post}
                            onClose={() => setShowModal(false)}
                            comments={commentsPosts}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default PostCard;