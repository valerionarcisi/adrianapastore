import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import getAllPosts from '../lib/grapql/query/getAllPosts';
import { PostAbstract } from '../lib/grapql/query/models';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
    const { posts } = await getAllPosts();
    return {
        props: {
            posts,
        }
    }
}

export type Blog = {
    posts?: PostAbstract[];
}

const Blog: NextPage<Blog> = ({ posts }) => {
    return (
        <section className={styles.posts__container}>
            {posts?.map(post => (<div key={post.id} className={styles.post__container}>
                <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.fileName}
                    layout="fixed"
                    width={320}
                    height={180}
                />
                <div className={styles.post__description}>
                    <h3 className="font-semibold text-slate-900">{post.title}</h3>
                    <div>{post?.excerpt}</div>
                    <Link href={`/posts/${encodeURIComponent(post.slug)}`} passHref>...continue to read</Link>
                </div>
            </div>))}
        </section>
        )
}

export default Blog
