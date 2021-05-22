import {NavLink} from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItemLinkActive} to="/" className={styles.navItemLink}>twitters</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItemLinkActive} to="/articles" className={styles.navItemLink}>articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItemLinkActive} to="/notes" className={styles.navItemLink}>notes</NavLink>
            </li>
        </ul>
    </nav>
)

export default HeaderNavigation;