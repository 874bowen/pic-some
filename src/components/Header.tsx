import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../context/context";

function Header() {
    const {cartItems}: any = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart" style={{textDecoration: 'none'}}><i className={`${cartClassName} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Header
