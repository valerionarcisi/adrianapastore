import React, { FunctionComponent } from "react";
import Nav from "./navbar";


const Header: FunctionComponent = () => {
    return (<header>
        <Nav>
            <Nav.Navlink href="/about">
                <button>Chi Sono</button>
            </Nav.Navlink>
            <Nav.Navlink>
                <button>Blog</button>
            </Nav.Navlink>
            <Nav.Navlink>
                <button>Contattami</button>
            </Nav.Navlink>
        </Nav>
    </header>)
}

export default Header