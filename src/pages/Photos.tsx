import { useContext } from "react";
import { Context } from "../context/context";
import Image from "../components/Image";
import { getClass } from "../utils";

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
        const className = getClass(Number(photo.id))
        return(
            <Image url={photo.url} className={className} />
        )
    })

	return (
		<main className="photos">
			<h1>Images go here</h1>
            {images}
		</main>
	);
}

export default Photos;
