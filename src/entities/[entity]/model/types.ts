import type {ReactNode} from "react"

export interface PostModel {
    userId: number,
    id: number,
    title: string,
    body: string,
    date?: string
}

export interface UserModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
}

export interface UserCardModel {
    user?: UserModel
}

export type ItemListProps<T extends UserModel> = {
    items: T[];
    renderItem: (user: T) => ReactNode;
}

export interface UserCommentModel {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface UserAlbumPhotosModel {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface UserPhotoModel {
    userId: number,
    id: number,
    title: string
}

export interface UserTodoModel {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}