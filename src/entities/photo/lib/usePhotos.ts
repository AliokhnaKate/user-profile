import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import type {UserPhotoModel} from "../model/types";
import {useGetUserPhotosQuery} from "../api/userPhotosApi";

export const usePhotos = () => {
    const {id} = useParams();
    const {data: apiPhotos} = useGetUserPhotosQuery(id);

    const [photos, setPhotos] = useState<UserPhotoModel[]>([]);
    const [displayedPhotos, setDisplayedPhotos] = useState<UserPhotoModel[]>([]);

    useEffect(() => {
        if (apiPhotos) {
            setPhotos(apiPhotos);
            setDisplayedPhotos(apiPhotos.slice(0, 6))
        }
    }, [apiPhotos]);

    return {photos, setPhotos, displayedPhotos, setDisplayedPhotos};
}