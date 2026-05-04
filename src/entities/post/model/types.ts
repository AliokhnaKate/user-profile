export interface PostModel {
    userId: number,
    id: number,
    title: string,
    body: string,
    date?: string
}

export interface PostsWithUserName extends PostModel {
    userName: string,
}