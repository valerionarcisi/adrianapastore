import React, { FunctionComponent } from "react";
import Nav from "./navbar";


const Header: FunctionComponent = () => {
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