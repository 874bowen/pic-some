import { useContext } from "react";
import { Context } from "../context/context";
import Image from "../components/Image";

interface Photo {
    url: string;
    id: string;
    isFavorite: boolean;
}
 
function Photos() {
    const context = useContext(Context)
    const {allPhotos}: any = context
    console.log(allPhotos);

    const images = allPhotos.map((photo: Photo) => {
        return(
            <Image key={photo.id} img={photo} />
        )
    })

	return (
		<main className="photos">
            {images}
		</main>
	);
}

export default Photos;
