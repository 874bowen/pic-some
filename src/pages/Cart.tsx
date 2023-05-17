import {useContext, useEffect, useState} from "react"
import {Context} from "../context/context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, removeFromCart, setCartItems}: any = useContext(Context)
    const [isOrdering, setIsOrdering]: any = useState(false)
    const [totalCost, setTotalCost] = useState((0).toLocaleString("en-US", {style: "currency", currency: "USD"}))
    const cartItemElements = cartItems.map((item: any) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
    ))
    
    function placeOrder() {
        setIsOrdering(true)
        setTimeout(() => {
            console.log("Order placed!")
            setCartItems([])
            setIsOrdering(false)
        } ,3000)
    }
    useEffect(() => {
        setTotalCost((5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"}))
    }, [cartItems])

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{ isOrdering ? 'Ordering...': 'Place Order'}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart