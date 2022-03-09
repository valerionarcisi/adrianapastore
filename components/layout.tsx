import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { FC, HTMLAttributes } from 'react'
import Footer from './footer';
import Main from './main';
import Navbar from './header';

export type TwitterTags = {
    handle: string,
    site: string,
    cardType: string,
}

export type OpenGraphImg = {
    url: string,
    width: number,
    height: number,
    alt: string,
    type: string,
}

export type OpenGraph = {
    url: string,
    title: string,
    description: string,
    images: OpenGraphImg[],
    site_name: string,
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    title?: string,
    description?: string,
    canonical?: string
    openGraph?: OpenGraph,
    twitter?: TwitterTags,
}

const Layout: FC<LayoutProps> = ({
    children,
    title = 'Adriana Pastore | Parent Coach, Educatrice',
    description = 'Adriana Pastore | Parent Coach, Educatrice',
    canonical = 'https://www.adrianapastore.com',
    openGraph,
    twitter,
}) => {
    return (<>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NextSeo
            title={title}
            description={description}
            canonical={canonical}
            openGraph={openGraph}
            twitter={twitter}
        />
        <div
            className="w-full min-h-screen"
        >
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </div>
    </>)
}

export default Layout;
