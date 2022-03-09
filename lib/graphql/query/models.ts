export type ResposeData<K extends string, T> = Record<K, T>;

export type Content = {
    html: string;
}

export type Image = {
    url: string;
    height?: number;
    width?: number;
    fileName: string;
}

export type Post = {
    id: string,
    title: string,
    slug: string,
    excerpt?: string,
    content: Content,
    coverImage: Image,
}


export type PostAbstract = Omit<Post, 'content'>

export type ResponseGetAllPostsAbstract = ResposeData<'posts', PostAbstract[]>

export type Seo = {
    title: string,
    description: string,
}

export type Picture = Omit<Image, 'fileName'>

export type Author = {
    name: string,
    picture: Picture,
}


export type PostDetail = Post & {
    author: Author
} & {
    seo: Seo
};

export type AboutPageContent = {
    title: string,
    content: Content,
    seo: Seo,
}

export type ResponseGetPostBySlug = ResposeData<'post', PostDetail>

export type ResponseGetAboutPage = ResposeData<'pages', AboutPageContent[]>