import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {UserPhotoAlbumsModel} from "../model/types";
import {useGetUserPhotoAlbumsQuery} from "../api/userPhotoAlbumsApi";

export const UsePhotosAlbums = () => {
    const {id} = useParams();
    const {data: apiAlbum} = useGetUserPhotoAlbumsQuery(id);

    const [albums, setAlbums] = useState<UserPhotoAlbumsModel[]>([])
    const [displayedAlbums, setDisplayedAlbums] = useState<UserPhotoAlbumsModel[]>([]);

    useEffect(() => {
        if (apiAlbum) {
            setAlbums(apiAlbum);
            setDisplayedAlbums(apiAlbum.slice(0, 6))
        }
    }, [apiAlbum]);

    return {albums, displayedAlbums};
}