import React, { useState } from 'react';
import RecipeCard from "../shared/RecipesCard";
import { RecipeInterface } from "../utils/RecipeInterface"

const recipes: RecipeInterface[] = [
    {
        'name': 'Easy Chicken Shawarma',
        'image': 'https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg',
        'description':'This easy, healthy homemade chicken shawarma is a huge fan-favorite around here, for good reason!',
        'date': new Date(new Date('2015-03-25')),
        'duration': 6,
        'category': 'Caribbean',
    },
    {
        'name': 'Efo Riro',
        'image': 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/12/img_2573.jpg',
        'description':'Efo riro also Nigerian spinach stew is a delicious Nigerian vegetable soup recipe that’s unbelievably easy to make',
        'date': new Date('2015-03-23'),
        'duration': 3,
        'category': 'African'
    },
    {
        'name': 'Ofada Rice and Sauce',
        'image': 'https://img-global.cpcdn.com/recipes/26f258e620b7534d/680x482cq70/ofada-rice-and-sauce-recipe-main-photo.jpg',
        'description':'',
        'date': new Date('2015-03-23'),
        'duration': 3,
        'category': 'African'
    },
    {
        'name': 'Best View in Newyork City',
        'image': 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500',
        'description':'',
        'date': new Date('2015-03-23'),
        'duration': 3,
        'category': 'African'
    },
    {
        'name': 'Best View in Newyork City',
        'image': 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500',
        'description':'',
        'date': new Date('2023-05-01'),
        'duration': 5,
        'category': 'African'
    },
    {
        'name': 'Best View in Newyork City',
        'image': 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500',
        'description':'',
        'date': new Date('2022-08-13'),
        'duration': 10,
        'category': 'African'
    },
    {
        'name': 'Best View in Newyork City',
        'image': 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500',
        'description':'',
        'date': new Date('2015-03-23'),
        'duration': 3,
        'category': 'African'
    }
];

const Recipes: React.FC<RecipeInterface[]> = () => {
    
    const recipesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginate = (page: number) => {
        setCurrentPage(page);
    }

    return(
        <main className="mt-24 p-20">
            <section>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <h1>Latest Recipes</h1>
                    <p>
                        It's not only possible to eat healthy food that also tastes amazing, it's actually easier than you think. 
                        Check out the latest recipes from our kitchen, learn about the ingredients you are using, 
                        find weekly meal plans, and get inspired!
                    </p>
                </div>
            </section>

            <section className="flex flex-wrap m-5">

                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        
                        {
                            currentRecipes.map((element: RecipeInterface, index: number) => (
                            
                            <RecipeCard 
                                    key= {index}
                                    image = {element.image}
                                    name = {element.name}
                                    description= {element.description}
                                    date={element.date}
                                    duration={element.duration}
                                    category={element.category}
                            />
                            ))
                        }
                    </div>
                    <div className="flex justify-center mt-5">
                        {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-2 px-3 py-2 rounded-md ${currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-700'}`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                            ))
                        }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Recipes