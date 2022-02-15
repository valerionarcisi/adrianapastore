export type ResposeData<K extends string, T> = Record<K, T>;

export type Content = {
    html: string;
}

export type CoverImage = {
    url: string;
    fileName: string;
}

export type Post = {
    id: string,
    title: string,
    slug: string,
    excerpt?: string,
    content: Content,
    coverImage: CoverImage,
}


export type PostAbstract = Omit<Post, 'content'>

export type ResponseGetAllPostsAbstract = ResposeData<'posts', PostAbstract[]>