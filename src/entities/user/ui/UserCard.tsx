import {useState} from "react";
import styles from '../../../app/App.module.css';
import ClickableBox from "../../../shared/ui/сlickableBox/ClickableBox";
import {useNavigate, useParams} from "react-router-dom";
import type {UserModel} from "../model/types";
import UserPhotoAlbumsList from "../../../widgets/userPhotoAlbumsList/ui/UserPhotoAlbumsList";
import UserPhotosList from "../../../widgets/userPhotosList/ui/UserPhotosList";
import UserPostsList from "../../../widgets/userPostsList/ui/UserPostsList";

interface UserCardProps {
    user?: UserModel | null
}

type TabType = "albums" | "photos" | "todos" | null;

function UserCard({user}: UserCardProps) {
    const [show, setShow] = useState<TabType>('photos');
    const navigate = useNavigate();
    const {id} = useParams();      

    const handleClick = (event: React.MouseEvent, type: TabType) => {
        // Предотвращаем переход по ссылке, нужен для событий onSubmit формы, а не для onChange текстового поля. 
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
                        {show === 'photos' && <UserPhotosList mode='preview' />}
                    </ClickableBox>

                    <ClickableBox to={`/users/${id}/albums`} onClick={(event) => {
                        handleClick(event, 'albums')
                        }
                    }>
                        Фотоальбомы
                        {show === 'albums' && <UserPhotoAlbumsList mode='preview' />}
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
                    <UserPostsList />
                </div>    
            </div>
        </>
    )
}

export default UserCard;