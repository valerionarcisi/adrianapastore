import { NextSeo } from "next-seo";
import { FunctionComponent } from "react";
import { Author, Seo } from "../lib/grapql/query/models";
import PostTitle from "./post-title";

export type PostHeader = {
    title: string,
    seo: Seo,
    author: Author
    coverImage: string,
}

const PostHeader: FunctionComponent<PostHeader> = (
    { author, title, seo, coverImage }
) => {
    return (<>
        <NextSeo
            title={seo.title}
            description={seo.description}
        />
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
            {author.name}  -- {author.picture.url}
        </div>
        <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
            {coverImage}
        </div>
    </>)
}


export default PostHeader;