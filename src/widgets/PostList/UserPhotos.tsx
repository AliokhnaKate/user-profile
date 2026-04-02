import type {UserPhotoModel} from "../../entities/[entity]/model/types";
import {usePhotos} from "../../entities/photo/lib/usePhotos";

interface UserPhotosProps {
    mode: 'preview' | 'full' | null;
}

function UserPhotos ({mode}: UserPhotosProps) {
  const {photos, displayedPhotos} = usePhotos();

  return (
    <>
      {mode === 'preview' && (
        <div>
          {displayedPhotos?.map((photo: UserPhotoModel) => (
              <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
            ))
          }
        </div>
      )}

      {mode === 'full' && (
        <div>
          {photos?.map((photo: UserPhotoModel) => (
              <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
            ))
          }
        </div>
      )}
    </>
  )
}

export default UserPhotos;