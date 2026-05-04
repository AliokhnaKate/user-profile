import {NavLink} from "react-router-dom";
import type {LinksProps} from "./types";
import styles from './Links.module.css';

function Links({items, variant='vertical'}: LinksProps) {

    return (
        <div className={`${styles.navLinks} ${styles[variant]}`}>
            {items.map(item => (
                <NavLink key={item.id} to={item.path} target="_blank">
                    {item.text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;