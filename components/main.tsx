import React, { FunctionComponent } from "react";

export interface IMain {
    children: React.ReactNode,
}

const Main: FunctionComponent<IMain> = ({ children }) => {
    return (<main>{children}</main>)
}

export default Main;