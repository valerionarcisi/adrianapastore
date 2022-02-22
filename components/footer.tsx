import { FC, HTMLAttributes } from "react";
import styles from '../styles/Footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLAreaElement> { };

const Footer: FC<FooterProps> = ({ children}) => {
    return (<footer className={styles.container}>
        {children}
    </footer>)
}

export default Footer;