import Link from "next/link";
import React, { FunctionComponent } from "react";
import Logo from "./logo";
import styles from '../styles/Navbar.module.css'

export interface INavlinkProps {
    href?: string;
    children: React.ReactNode,
}

const Navlink: FunctionComponent<INavlinkProps> = ({
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
    Navlink: FunctionComponent<INavlinkProps>
}

const Nav: FunctionComponent<INavProps> & INavComposition = ({
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