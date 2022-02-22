import React, { FC, HTMLAttributes } from "react";
import Nav from "./navbar";

export interface HeaderProps extends HTMLAttributes<HTMLUListElement> {}

const Header: FC<HeaderProps> = () => {
    return (<header>
        <Nav>
            <Nav.Navlink href="/chi-sono">
                <button>Chi Sono</button>
            </Nav.Navlink>
            <Nav.Navlink href="/blog">
                <button>Blog</button>
            </Nav.Navlink>
            <Nav.Navlink href="/contatti">
                <button>Contattami</button>
            </Nav.Navlink>
        </Nav>
    </header>)
}

export default Header