import React, { FC, HTMLAttributes } from "react";

export interface MainProps extends HTMLAttributes<HTMLElement>{}

const Main: FC<MainProps> = ({ children }) => {
    return (<main>{children}</main>)
}

export default Main;