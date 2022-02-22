import { FC, HTMLAttributes } from "react"
import "../styles/Post.module.css";
export interface PostTitleProps extends HTMLAttributes<HTMLElement> {}

const PostTitle: FC<PostTitleProps> = ({ children }) => {
    return (
        <h1>
            {children}
        </h1>
    )
}


export default PostTitle