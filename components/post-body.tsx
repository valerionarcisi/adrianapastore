import { FunctionComponent } from "react"
import { Content } from "../lib/grapql/query/models"
import postStyles from '../styles/Post.module.css'

const PostBody: FunctionComponent<Content> = ({ html }) => {
    return (
        <div
            className={`max-w-2xl mx-auto post ${postStyles.post}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}


export default PostBody