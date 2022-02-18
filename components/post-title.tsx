import React, { FunctionComponent } from "react"
import "../styles/PostStyles.module.css";

export type PostTitle = {
    children: React.ReactNode,
}

const PostTitle: FunctionComponent<PostTitle> = ({ children }) => {
    return (
        <h1>
            {children}
        </h1>
    )
}


export default PostTitle