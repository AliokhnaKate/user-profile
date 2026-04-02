// import styles from '../../App.module.css';
import UserTabs from '../UserTabs/UserTabs';

function SideNav() {

      const sideNav = [
        {id: 'Profile', path: '/users/4', text: 'Профиль'},
        {id: 'Posts', path: '/posts', text: 'Лента'},
        {id: 'Messages', path: '/messages', text: 'Мессенджер'},
        {id: 'Users', path: '/users', text: 'Друзья'},
        {id: 'Photos', path: '/albums/4/photos', text: 'Фото'}, //Фото: здесь 2 вкладки фото и альбомы с фото
    ];

  return (
    <>
    <aside>
        <UserTabs 
        sideNav={sideNav}/>
    </aside>
    </>
  )
}

export default SideNav;