import {FaRegComment} from 'react-icons/fa';
import styles from '../../../App.module.css';
import type {PostsWithUserName} from '../../../widgets/PostList/Posts';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import UsePortal from '../../../shared/ui/Modal/PortalAboutProject';

function PostCard (post: PostsWithUserName) {
    //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
    const Portal = UsePortal('portal-root');
    const [showModal, setShowModal] = useState(false);

    const handleInputClick = (e: React.MouseEvent) => {
      e.stopPropagation()
    };
    
    return (
        <>
            <div key={post.id}>
                <NavLink key={post.userId} to={`/users/${post.userId}`}>
                    <h2>{post.userName}</h2>
                </NavLink>
    
                <div className={styles.post}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <div>
                        <button onClick={(e) => {
                                    e.stopPropagation()
                                    setShowModal(true)}
                                }>
                            <FaRegComment size={14} />
                        </button>
                        <small>{new Date(post.date as string).toLocaleString()}</small>
                    </div>

                    {showModal && (
                        <Portal onClose={() => setShowModal(false)}>
                            <div className={styles.post}>
                                <Portal.Header>
                                    <h3>{post.title}</h3>
                                </Portal.Header>

                                <Portal.Body>
                                    <p>{post.body}</p>
                                    <small>{new Date(post.date as string).toLocaleString()}</small>
                                    <div>
                                        <input type='text' placeholder={'Написать комментарий'} onClick={handleInputClick} />
                                        <button>Отправить</button>
                                    </div>
                                </Portal.Body>

                                <Portal.Footer>
                                    <button onClick={() => setShowModal(false)}>OK</button>
                                </Portal.Footer>
                            </div>
                        </Portal>
                    )}
                </div>
            </div>
        </>
    )
}

export default PostCard;