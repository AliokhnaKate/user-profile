import {useParams} from "react-router-dom"
import {useGetUserPhotoAlbumsQuery} from "../../[entity]/api/Api";
import {useEffect, useState} from "react";
import {type UserPhotoAlbumsModel} from "../../[entity]/model/types";

export const UsePhotosAlbum = () => {
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