// import styles from '../../App.module.css';
import UserTabs from '../UserTabs/UserTabs';

function SideNav() {

      const sideNav = [        
        {id: 'Users', path: '/users', text: 'Пользователи'},
        {id: 'Photos', path: '/albums/:id/photos', text: 'Фото пользователя'},
        {id: 'Comments', path: '/posts/:id/comments', text: 'Комментарии пользователей'},
        {id: 'Posts', path: '/posts', text: 'Посты пользователей'},
        {id: 'PostsUser', path: '/users/:id/posts', text: 'Посты пользователя'},
        {id: 'Albums', path: '/users/:id/albums', text: 'Альбомы пользователя'},
        {id: 'Todos', path: '/users/:id/todos', text: 'Задачи пользователей'},
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