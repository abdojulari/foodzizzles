import { useState } from "react";

interface BookCardInterface {
    "image": string;
    "name": string;
    "price": number;
}
const BookCard:React.FC<BookCardInterface> = ({ image, price, name }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
        className="relative overflow-hidden bg-white rounded-md shadow-md transition-transform transform hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <img src={image} alt="Book 1" className="w-full h-48 object-cover" />
        {isHovered && (
            <div className="absolute bottom-0  transform  bg-gray-900 bg-opacity-90 p-4 rounded shadow-md opacity-100">
                <h3 className="text-orange-500 text-sm font-semibold mb-2 px-3">{ name }</h3>
                <div className="flex">
                    <span className="text-sm font-semibold border-gray-600 border-r-2 px-3">${ price }</span>
                    <button className="text-white px-3">
                        <img className="w-5" src="https://www.svgrepo.com/download/34974/shopping-cart.svg" />
                    </button>
                </div>
            </div>
        )}
    </div>
    )
}

export default BookCard;