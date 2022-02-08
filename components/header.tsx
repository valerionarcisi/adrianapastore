import Link from "next/link";
import React, { FunctionComponent } from "react";


const Header: FunctionComponent = () => {
    return (<header>
        <nav className="
        rounded 
        flex 
        mx-auto 
        bg-white 
        px-8 
        py-4 
        flex-col
        justify-center
        items-center
        lg:flex-row
        lg:justify-between 
        ">
            <div>
                <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
            </div>
            <div className="space-x-8">
                <a href="">Chi Sono</a>
                <a href="">Blogs</a>
                <a href="">Contattami</a>
            </div>
        </nav>
    </header>)
}

export default Header