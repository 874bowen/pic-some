import {useState} from "react";
import { useContext } from "react";
import { Context } from "../context/context";
import { getClass } from "../utils";


function Image({ img  }: any) {
	const context = useContext(Context)
	const [hovered, setHovered] = useState(false);
	const {toggleFavorite}: any = context

	// <i className="ri-heart-fill favorite"></i>
	const heartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className={`${img.isFavorite ? 'ri-heart-fill': 'ri-heart-line'} favorite`}></i>;
	const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;
	
	return (
		<div className={`${getClass(Number(img.id))} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<img src={img.url} className="image-grid" />
			{heartIcon}
			{cartIcon}
		</div>
	);
}

export default Image;
