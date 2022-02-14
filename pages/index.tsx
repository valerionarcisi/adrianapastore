import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import getAllPostsAbstract from '../lib/grapql/query/getAllPostsAbstract';
import { PostAbstract } from '../lib/grapql/query/models';

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
  console.log(posts)
  return (
    <div className={styles.hello__container}>      Hello world!    </div>
  )
}

export default Home
