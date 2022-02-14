import Link from "next/link";
import React from "react";
import Logo from "./logo";
import styles from '../styles/Navbar.module.css'

export interface INavlinkProps {
    href?: string;
    children: React.ReactNode,
}

const Navlink: React.FC<INavlinkProps> = ({
    href='#',
    children,
}) => {
    return (<Link href={href} passHref>
        {children}
    </Link>)
}

export interface INavProps {
    children: React.ReactNode;
}

export interface INavComposition {
    Navlink: React.FC<INavlinkProps>
}

const Nav: React.FC<INavProps> & INavComposition = ({
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