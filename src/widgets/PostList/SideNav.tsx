// import styles from '../../App.module.css';
import UserTabs from '../UserTabs/UserTabs';

function SideNav() {

      const sideNav = [        
        {id: 'Users', path: '/users', text: 'Друзья'}, //Друзья
        {id: 'Photos', path: '/albums/:id/photos', text: 'Фото'}, //Фото
        // {id: 'Comments', path: '/posts/:id/comments', text: 'Комментарии пользователей'}, //удалить, будет в постах
        {id: 'Posts', path: '/posts', text: 'Лента'}, //Лента
        // {id: 'PostsUser', path: '/users/:id/posts', text: 'Посты пользователя'}, //удалить в профиле пользователя, под карточкой
        // {id: 'Albums', path: '/users/:id/albums', text: 'Альбомы пользователя'}, //во 2ой вкладке фото
        // {id: 'Todos', path: '/users/:id/todos', text: 'Задачи пользователей'}, //удалить
    ];
//Мой профиль
//Лента (те посты всех пользователей + комментарии к ним)
//Друзья
//Фото (здесь 2 вкладки фото и альбомы с фото)

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