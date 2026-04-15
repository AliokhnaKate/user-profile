import {FaRegComment} from 'react-icons/fa';
import styles from '../../../App.module.css';
import type {PostsWithUserName} from '../../../widgets/PostList/PostsList';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import PostDetailModal from '../../../shared/ui/Modal/PostDetailModal';
import {commentsApi} from '../../[entity]/api/Api';

const {useGetCommentsQuery} = commentsApi;

function PostCard (post: PostsWithUserName) {
    const [showModal, setShowModal] = useState(false);
    const {data: commentsPosts} = useGetCommentsQuery(post.id);

    return (
        <>
            <div key={post.id}>
                {/* NavLink - это навигация между страницами */}
                <NavLink key={post.userId} to={`/users/${post.userId}`}>
                    <h2>{post.userName}</h2>
                </NavLink>
    
                <div className={styles.post}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    {/* <UserPostComments
                        comments={commentsPosts}
                        showControls={true}
                        hidden={true}
                        expandComment={'показать комментарии'}
                        collapseComment={'свернуть'}
                    /> */}
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