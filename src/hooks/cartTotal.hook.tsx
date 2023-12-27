import { useSelector } from 'react-redux';
import { CartState } from '../utils/cart';

const useCartTotal = (id: number) => {
    const cart = useSelector((state: CartState) => state.cart);
    const item = cart.filter(item => item.id === id);
    // calculate total price for the selected item
    const totalPricePerProduct = item.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    // calculate total price of all tht items in the cart
    const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    // calculate the tax on all items in the cart
    const tax = cart.reduce((total, item) => total + ( 0.05 * item.price * item.quantity), 0);
    // sum the grand total 
    const grandTotal = tax + subTotal;

    return { totalPricePerProduct, subTotal, tax, grandTotal };
};

export default useCartTotal;
