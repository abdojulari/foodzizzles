import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { ICart } from '../../utils/cart';
import useCartTotal from '../../hooks/cartTotal.hook';

const CartItem:React.FC<ICart> = ({id, image, title, price, quantity=0}) => {
    const dispatch = useDispatch();
    const { totalPricePerProduct } = useCartTotal(id);

    return (
        <tbody>
        <tr>
            <td className="py-4">
                <div className="flex items-center">
                    <img className="h-16 w-16 mr-4" src={image} alt="Product image" />
                    <span className="font-semibold text-sm">{ title }</span>
                </div>
            </td>
            <td className="py-4">{(price).toFixed(2)}</td>
            <td className="py-4">
                <div className="flex items-center">
                    <button
                        onClick={() => dispatch(decrementQuantity(id))}
                        className="border rounded-md py-1 px-4 mr-1"
                    >
                        -
                    </button>
                    <span className="text-center w-8">{ quantity}</span>
                    <button
                        onClick ={() => dispatch(incrementQuantity(id))} 
                        className="border rounded-md py-1 px-4 ml-1"
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="py-4">
                { totalPricePerProduct }
                <span className="px-3">
                    <button className="bg-lemon text-white text-sm p-2 rounded-lg" onClick={() => dispatch(removeItem(id))}>Remove</button>
                </span>
            </td>
        </tr>
       
    </tbody>
      
    )

}

export default CartItem;