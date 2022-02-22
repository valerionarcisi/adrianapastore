import { FC, HTMLAttributes } from "react"
import { Content } from "../lib/grapql/query/models"
import postStyles from '../styles/Post.module.css'

export interface PostBodyProps extends HTMLAttributes<HTMLElement> {
    content: Content
}

const PostBody: FC<PostBodyProps> = ({ content }) => {
    return (
        <div
            className={`max-w-2xl mx-auto post ${postStyles.post}`}
            dangerouslySetInnerHTML={{ __html: content.html }}
        />
    )
}


export default PostBody