import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import Logo from "./logo";
import styles from '../styles/Navbar.module.css'

export interface NavlinkProps extends HTMLAttributes<HTMLUListElement>{
    href?: string;
}

const Navlink: FC<NavlinkProps> = ({
    href='#',
    children,

}) => {
    return (<Link href={href} passHref>
        {children}
    </Link>)
}

export interface NavProps extends HTMLAttributes<HTMLUListElement> {}

export interface NavCompositionProps extends HTMLAttributes<HTMLUListElement>{
    Navlink: FC<NavlinkProps>
}

const Nav: FC<NavProps> & NavCompositionProps = ({
    children
}) => {
    return(<nav className={styles.container}>
        <Logo />    
        <div className="space-x-8">
            {children}
        </div>
</nav>
    )
}

Nav.Navlink = Navlink;

export default Nav;