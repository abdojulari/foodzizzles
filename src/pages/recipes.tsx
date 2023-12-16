import React, { useState } from 'react';
import RecipeCard from "../shared/RecipesCard";
import { RecipeInterface } from "../utils/RecipeInterface"
import recipes from '../mock/recipe.json'

const Recipes: React.FC<RecipeInterface> = () => {
    
    const recipesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCuisine, setSelectedCuisine] = useState('All Categories');

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const filteredRecipes = selectedCuisine === 'All Categories'
        ? recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
        : recipes.filter(recipe => recipe.cuisine === selectedCuisine).slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(recipes.filter(recipe => selectedCuisine === 'All Categories' || recipe.cuisine === selectedCuisine).length / recipesPerPage);

    const paginate = (page: number) => {
        setCurrentPage(page > totalPages ? totalPages : page);
    }

    const handleCuisineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCuisine(event.target.value);
        setCurrentPage(1); // Reset page when changing cuisine
    }

    return(
        <main className="py-20">
            <section className="mt-20">
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
                    <h1>Latest Recipes</h1>
                    <p>
                        It's not only possible to eat healthy food that also tastes amazing, it's actually easier than you think. 
                        Check out the latest recipes from our kitchen, learn about the ingredients you are using, 
                        find weekly meal plans, and get inspired!
                    </p>
                </div>
            </section>
            <section className="flex flex-wrap">
                <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-10">
                    <div className="my-5">
                        <select 
                            id="cuisine-select" 
                            className="bg-transparent border rounded-lg p-2 outline-0"
                            onChange={handleCuisineChange}
                            value={selectedCuisine}
                        >
                            <optgroup label="All Categories">
                                <option>All Categories</option>
                            </optgroup>
                            <optgroup label="African Cuisine">
                                <option>West African</option>
                                <option>North African</option>
                                <option>East African</option>
                                <option>Southern African</option>
                                <option>Central African</option>
                            </optgroup>
                            <optgroup label="Asian Cuisine">
                                <optgroup label="East Asian">
                                    <option>Chinese</option>
                                    <option>Japanese</option>
                                    <option>Korean</option>
                                </optgroup>
                                <optgroup label="Southeast Asian">
                                    <option>Thai</option>
                                    <option>Vietnamese</option>
                                    <option>Malaysian</option>
                                    <option>Indonesian</option>
                                </optgroup>
                                <optgroup label="South Asian">
                                    <option>Indian</option>
                                    <option>Pakistani</option>
                                    <option>Bangladeshi</option>
                                </optgroup>
                            </optgroup>
                            <optgroup label="European Cuisine">
                                <option>Italian</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Spanish</option>
                                <option>Greek</option>
                            </optgroup>
                            <optgroup label="Middle Eastern Cuisine">
                                <option>Arabian</option>
                                <option>Israeli</option>
                                <option>Persian</option>
                                <option>Turkish</option>
                            </optgroup>
                            <optgroup label="North American Cuisine">
                                <option>American</option>
                                <option>Canadian</option>
                                <option>Mexican</option>
                            </optgroup>
                            <optgroup label="Latin American Cuisine">
                                <option>Mexican</option>
                                <option>Brazilian</option>
                                <option>Argentinian</option>
                                <option>Peruvian</option>
                            </optgroup>
                            <optgroup label="Caribbean Cuisine">
                                <option>Jamaican</option>
                                <option>Cuban</option>
                                <option>Haitian</option>
                                <option>Trinidadian</option>
                            </optgroup>
                            <optgroup label="Oceanian Cuisine">
                                <option>Australian</option>
                                <option>New Zealand</option>
                                <option>Polynesian</option>
                                <option>Micronesian</option>
                            </optgroup>
                            <optgroup label="Scandinavian Cuisine">
                                <option>Swedish</option>
                                <option>Norwegian</option>
                                <option>Danish</option>
                                <option>Finnish</option>
                            </optgroup>    
                        
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">  
                        {filteredRecipes.map((element: RecipeInterface, index: number) => (    
                            <RecipeCard
                                id={element.id} 
                                key={index}
                                image={element.image}
                                name={element.name}
                                description={element.description}
                                date={element.date}
                                duration={element.duration}
                                category={element.category}
                                cuisine={element.cuisine}
                            />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="flex justify-center my-10">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`w-10 h-10 mx-2 px-3 py-2 rounded-md ${currentPage === index + 1 ? 'bg-lemon text-white' : 'bg-gray-300 text-gray-700'}`}
                                    onClick={() => paginate(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Recipes;
