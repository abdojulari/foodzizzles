import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

interface BookCardInterface {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity?: number; 
  }
const BookCard:React.FC<BookCardInterface> = ({ id, image, title, price }) => {
    const [isHovered, setHovered] = useState(false);
    const dispatch = useDispatch();
    const addCart = () => dispatch(addToCart({
        id,
        image, 
        title, 
        price,
        quantity: 1
    }))

    return (
        <div
        className="relative overflow-hidden bg-white rounded-md shadow-md transition-transform transform hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <img src={image} alt="Book 1" className="w-full h-48 object-cover" />
        {isHovered && (
            <div className="absolute bottom-0  transform  bg-gray-900 bg-opacity-90 p-4 rounded shadow-md ">
                <h3 className="text-white text-sm font-semibold mb-2 px-3">{ title }</h3>
                <div className="flex">
                    <span className="text-sm font-semibold border-gray-600 border-r-2 px-3 text-white">${ price }</span>
                    <button 
                        className="text-white px-3"
                        onClick={addCart}
                    >
                        <img className="w-5" src="https://www.svgrepo.com/download/34974/shopping-cart.svg" />
                    </button>
                </div>
            </div>
        )}
    </div>
    )
}

export default BookCard;