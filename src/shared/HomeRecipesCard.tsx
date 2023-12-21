import React from 'react';
import { RecipeInterface } from '../utils/RecipeInterface';
import { Link } from 'react-router-dom';

const HomeRecipeCard: React.FC<RecipeInterface> = ({ id, image, name, category, cuisine }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
                <Link to={`/recipe/${id}`}>
                    <img className="w-full h-52 object-cover"
                        src={image}
                        alt={name} />
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                    <div
                        className="absolute bottom-0 left-0 bg-lemon px-4 py-2 text-white text-sm hover:bg-white hover:text-lemon transition duration-500 ease-in-out">
                        {category} | { cuisine }
                    </div>
                    
                </Link>
            </div>       
        </div>
    )
}

export default HomeRecipeCard;