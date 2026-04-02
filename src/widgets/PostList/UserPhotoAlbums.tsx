import {NavLink, useParams} from "react-router-dom";
import type {UserPhotoAlbumsModel} from "../../entities/[entity]/model/types";
import {UsePhotosAlbum} from "../../entities/album/lib/UsePhotosAlbum";

interface UserModeProps {
    mode: 'preview' | 'full' | null;
} 

function UserPhotoAlbums ({mode}: UserModeProps) {
  const {albums, displayedAlbums} = UsePhotosAlbum();

  return (
    <>
    {mode === 'preview' && (
      <div>
        {displayedAlbums?.map((album: UserPhotoAlbumsModel) => (
          <div key={album.id}>
              <NavLink key={album.id} to={`/albums/${album.id}/photos`} onClick={(e) => e.stopPropagation()}>{album.title}</NavLink>
          </div>
          ) 
        )}
      </div>
    )}

    {mode === 'full' && (
      <div>
        {albums?.map((album: UserPhotoAlbumsModel) => (
            <div key={album.id}>
              <NavLink key={album.id} to={`/albums/${album.id}/photos`} onClick={(e) => e.stopPropagation()}>{album.title}</NavLink>
            </div>
          ) 
        )}
      </div>
    )}
    </>
  )
}

export default UserPhotoAlbums;