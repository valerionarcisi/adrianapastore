import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import getAllPostsAbstract from '../lib/graphql/query/getAllPostsAbstract';
import { PostAbstract } from '../lib/graphql/query/models';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getAllPostsAbstract();
  return {
    props: {
      posts,
    }
  }
}

export interface IHome {
  posts?: PostAbstract[];
}

const Home: NextPage<IHome> = ({ posts }) => {
  return (<>
    <div className={styles.hello__container}>
      Im Adriana, Im an eductor and a parent coach.
    </div>
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
  </>
  )
}

export default Home
