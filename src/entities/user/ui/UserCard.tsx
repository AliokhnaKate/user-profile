import {useState} from "react";
import styles from '../../../App.module.css';
import ClickableBox from "../../../shared/ui/Button/Button";
import UserAlbums from "../../../widgets/PostList/UserAlbums";
import UserPosts from "../../../widgets/PostList/UserPosts";
import UserTodos from "../../../widgets/PostList/UserTodos";
import UserPostComments from "../../../widgets/PostList/UserPostComments";
import type {UserModel} from "../../[entity]/model/types";

interface UserCardProps {
    user?: UserModel | null;
}

function UserCard({user}: UserCardProps) {
    const [show, setShow] = useState<"albums" | "posts" | "todos" | null>(null);

    return (
        <>
            <div className={styles.user}>
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
                <span>{user?.address.city}, {user?.address.street}, {user?.address.suite}</span>
            </div>

            <div>

                <div className={styles.postActions}>
                    <ClickableBox to='/users/:id/albums' onClick={(event) => {
                            event.currentTarget,
                            setShow(show === "albums" ? null : "albums")
                        }
                    }>
                        Альбомы
                        {show === 'albums' && <UserAlbums />}
                    </ClickableBox>

                    <ClickableBox to='/users/:id/posts' onClick={(event) => {
                            event.currentTarget,
                            setShow(show === 'posts' ? null : 'posts')
                        }
                    }>
                        Посты
                        {show === 'posts' && <UserPosts />}
                    </ClickableBox>

                    <ClickableBox to='/users/:id/todos' onClick={(event) => {
                            event.currentTarget,
                            setShow(show === 'todos' ? null : 'todos')
                        }
                    }>
                        Задачи
                        {show === 'todos' && <UserTodos />}
                    </ClickableBox>
                </div>
                                        
                <UserPostComments />
            </div>
        </>
    )
}

export default UserCard;