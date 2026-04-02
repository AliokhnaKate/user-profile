import {useState} from "react";
import styles from '../../../App.module.css';
import ClickableBox from "../../../shared/ui/Button/Button";
import UserPosts from "../../../widgets/PostList/UserPosts";
import UserTodos from "../../../widgets/PostList/UserTodos";
import type {UserModel, UserPhotoModel} from "../../[entity]/model/types";
import {useNavigate, useParams} from "react-router-dom";
import UserPhotoAlbums from "../../../widgets/PostList/UserPhotoAlbums";
import UserPhotos from "../../../widgets/PostList/UserPhotos";
import {useGetUserPhotoAlbumsQuery, useGetUserPhotosQuery} from "../../[entity]/api/Api";
import {usePhotos} from "../../photo/lib/usePhotos";

interface UserCardProps {
    user?: UserModel | null
}

type TabType = "albums" | "photos" | "todos" | null;

function UserCard({user}: UserCardProps) {
    const [show, setShow] = useState<TabType>('photos');
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    // const {data: apiPhotos} = useGetUserPhotosQuery(id);
    // const {data: apiUserPhotoAlbums} = useGetUserPhotoAlbumsQuery(id);
      

    const handleClick = (event: React.MouseEvent, type: TabType) => {
        // Предотвращаем переход по ссылке
        event.preventDefault();

        if (type === show) {
            //если открыто, то перенаправляем на др страницу
            if (type === 'albums') navigate(`/users/${id}/${type}`);
            if (type === 'photos') navigate(`/albums/${id}/${type}`);
        } else {
            setShow(type);
        };
    }

    const handleShowAll = () => {
        if (show === 'albums') navigate(`/users/${id}/${show}`);
        if (show === 'photos') navigate(`/albums/${id}/${show}`);
    }

    return (
        <>
            <div className={styles.user}>
                <div>
                    <h3>{user?.name}</h3>
                    {/* должен открываться портал с задачами */}
                    {/* <ClickableBox to='/users/:id/todos' onClick={(event) => {
                            event.currentTarget,
                            setShow(show === 'todos' ? null : 'todos')
                        }
                    }>
                            еще
                        {show === 'todos' && <UserTodos />}
                    </ClickableBox> */}
                </div>

                <div>
                    <p>{user?.email}</p>
                    <span>{user?.address.city}</span>
                </div>
            </div>

            <div className={styles.postActions}>
                <div>
                    <ClickableBox to={`/albums/${id}/photos`} onClick={(event) => {
                            handleClick(event, 'photos')
                        }
                    }>
                        Фото
                        {show === 'photos' && <UserPhotos mode='preview' />}
                    </ClickableBox>

                    <ClickableBox to={`/users/${id}/albums`} onClick={(event) => {
                        handleClick(event, 'albums')
                        }
                    }>
                        Фотоальбомы
                        {show === 'albums' && <UserPhotoAlbums mode='preview' />}
                    </ClickableBox>
                </div>

                <button onClick={(event) => {
                    event.stopPropagation();
                    handleShowAll();
                    }
                }>
                    показать все
                </button>

                <div>
                    <UserPosts />
                </div>    
            </div>
        </>
    )
}

export default UserCard;