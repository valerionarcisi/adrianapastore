import { NextSeo } from "next-seo";
import { GetStaticProps } from "next/types";
import React, { FunctionComponent } from "react";
import getAboutPage from "../lib/graphql/query/getAboutPage";
import { AboutPageContent } from "../lib/graphql/query/models";

export const getStaticProps: GetStaticProps = async () => {
    const { pages } = await getAboutPage();
    return {
        props: {
            page: pages[0],
        }
    }
}

export type AboutPage = {
    page: AboutPageContent;
}

const About: FunctionComponent<AboutPage> = ({
    page
}) => {
    return (<>
        <NextSeo
            title={page.seo.title}
            description={page.seo.description}
        />
        <section>
            <h1>{page.title}</h1>
            <div
                className={`max-w-2xl mx-auto`}
                dangerouslySetInnerHTML={{ __html: page.content.html }}
            />
        </section>
    </>);
}

export default About;