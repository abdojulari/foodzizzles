import React from 'react';
import { RecipeInterface } from '../utils/RecipeInterface';
import formatDate from '../utils/DateFormat';
import { Link } from 'react-router-dom';

const RecipeCard: React.FC<RecipeInterface> = ({ id, image, name, description, duration, date, category, cuisine }) => {
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
                    <div
                        className="text-sm absolute top-0 right-0 bg-lemon px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-lemon transition duration-500 ease-in-out">
                        <span className="font-bold">{formatDate(date).day + 1}</span>
                        <small>{formatDate(date).month}</small>
                    </div>
                </Link>
            </div>
            <div className="px-6 py-4">

                <Link to={`/recipe/${id}`}
                    className="font-semibold text-lg inline-block hover:text-lemon transition duration-500 ease-in-out"
                >
                    {name}
                </Link>
                <p className="text-gray-500 text-sm">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span 
                    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" viewBox="0 0 512 512"
                    >
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span className="ml-1">{duration} mins read</span></span>
            </div>
        </div>
    )
}

export default RecipeCard;