import {useState} from "react";
import { useContext } from "react";
import { Context } from "../context/context";
import { getClass } from "../utils";


function Image({ img  }: any) {
	const context = useContext(Context)
	const [hovered, setHovered] = useState(false);
	const {toggleFavorite, addToCart, cartItems, removeFromCart}: any = context

	const isInCart = (id: string) => {
		return cartItems.some((item: any) => item.id === id);
	};

	function heartIcon() {
		if (img.isFavorite) {
			return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>;
		} else if (hovered) {
			return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>;
		}
	}

	function cartIcon() {
		if (isInCart(img.id)) {
			console.log("in cart");
			return <i className="ri-shopping-cart-fill cart"  onClick={() => removeFromCart(img.id)}></i>;
		} else if (hovered) {
			return <i className="ri-add-circle-line cart"  onClick={() => addToCart(img)}></i>;
		}
	}
	
	return (
		<div className={`${getClass(Number(img.id))} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<img src={img.url} className="image-grid" />
			{heartIcon()}
			{cartIcon()}
		</div>
	);
}

export default Image;
