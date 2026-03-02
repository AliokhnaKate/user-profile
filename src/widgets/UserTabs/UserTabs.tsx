import {NavLink} from 'react-router-dom';
import styles from '../../App.module.css';

interface ItemCategory {
        id: string,
        path: string,
        text: string
};

interface UserTabsProps  {
    sideNav: ItemCategory[],
};

function UserTabs({sideNav}: UserTabsProps) {

    return (
        <>
            <div className={styles.sidebar}>
            {sideNav.map(item => (
              <NavLink key={item.id} to={item.path}>
                {item.text}
              </NavLink>
            ))}
            </div>
        </>
    )
}
export default UserTabs;