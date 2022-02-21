import React, { FunctionComponent } from "react";
import PostBody from "../../components/post-body";
import { PostDetail } from "../../lib/grapql/query/models";
import { GetStaticPaths, GetStaticProps } from "next";
import getPostBySlug from "../../lib/grapql/query/getPostBySlug";
import { ParsedUrlQuery } from "querystring";
import PostHeader from "../../components/post-header";
import getAllPostsAbstract from "../../lib/grapql/query/getAllPostsAbstract";
interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { posts } = await getAllPostsAbstract()
    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;
    const { post } = await getPostBySlug(slug)
    return {
        props: {
            post,
        }
    }
}

export interface IPost {
    post: PostDetail;
}

const Post: FunctionComponent<IPost> = ({ post }) => {
    return (<article>
        <PostHeader
            author={post.author}
            seo={{
                description: post.title,
                title: post.title,
            }}
            title={post.title}
            coverImage={post.coverImage.fileName}
        />
        <PostBody
            html={post.content.html}
        />
    </article>);
}

export default Post;