import {NavLink} from "react-router-dom";
import {UsePhotosAlbums} from "../../../entities/album/lib/UsePhotosAlbums";
import type {UserPhotoAlbumsModel} from "../../../entities/album/model/types";

interface UserPhotoAlbumsProps  {
    mode: 'preview' | 'full';
}

function UserPhotoAlbumsList ({mode}: UserPhotoAlbumsProps) {
  const {albums, displayedAlbums} = UsePhotosAlbums();

  return (
    <>
    {mode === 'preview' && (
      <div>
        {displayedAlbums?.map((album: UserPhotoAlbumsModel) => (
              <NavLink key={album.id} to={`/albums/${album.id}/photos`} onClick={(e) => e.stopPropagation()}>{album.title}</NavLink>
          ) 
        )}
      </div>
    )}

    {mode === 'full' && (
      <div>
        {albums?.map((album: UserPhotoAlbumsModel) => (
              <NavLink key={album.id} to={`/albums/${album.id}/photos`} onClick={(e) => e.stopPropagation()}>{album.title}</NavLink>
          ) 
        )}
      </div>
    )}
    </>
  )
}

export default UserPhotoAlbumsList;