import CartItem from "../components/cart/CartItem";
import { useSelector } from 'react-redux'
import { CartState } from "../utils/cart";
import useCartTotal from "../hooks/cartTotal.hook";


const Cart = () => {
    const cart = useSelector((state: CartState) => state.cart);
    const { subTotal, tax, grandTotal } = useCartTotal(0);
    return (
        <article className="py-20">
            <section className="pt-20">
                <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-10">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                            <th className="text-left font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    {cart?.map((item, index) => (
                                        <CartItem key={index}
                                            id={item.id} 
                                            image={item.image} 
                                            title={item.title} 
                                            price={item.price} 
                                            quantity={item.quantity} 
                                        />
                                    ))}
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>{ (subTotal).toFixed(2) } </span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>{ (tax).toFixed(2)} </span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">{ (grandTotal).toFixed(2) }</span>
                                </div>
                                <button className="bg-lemon text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
        </article>
    )
}

export default Cart;