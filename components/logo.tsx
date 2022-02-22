import Link from "next/link";
import { FC } from "react";

 const Logo:FC = () => {
    return (<Link href="/" passHref>
        <h3 className="text-2xl font-medium text-blue-500 cursor-pointer">LOGO</h3>
    </Link>)
}

export default Logo;