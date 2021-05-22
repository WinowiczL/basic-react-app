import styles from "./Header.module.scss"
import HeaderNavigation from "./HeaderNavigation";
import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <HeaderNavigation/>
        <Button secondary onClick={openModalFn}>new item</Button>
    </header>
)

export default Header;