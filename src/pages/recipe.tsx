
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeInterface } from '../utils/RecipeInterface';
import recipes from '../mock/recipe.json';
import addition from '../mock/additionalDetails.json';
import { useQuery } from '@tanstack/react-query';



const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeInterface | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['recipe '],
    queryFn: () => addition
  })

  useEffect(() => {
      const selectedRecipe = recipes.find(recipe => recipe.id === Number(id));
      if (selectedRecipe) {
          setRecipe(selectedRecipe);
        }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  if (isLoading)  return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="mt-20 bg-gray-100">
      <section className="flex flex-wrap my-20">
            <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16">
                { recipe && (
                    <div className="flex flex-col">
                        <div className="flex p-5">
                            <div className="md:w-1/2 mb-6 md:mb-0">
                              <img className="w-full h-96 object-cover rounded-lg shadow-md" 
                                  src={recipe.image} 
                                  alt={recipe.name} 
                              />
                            </div>
                            <div className="md:w-1/2 md:ml-6">
                                <h1 className="text-2xl text-lemon">{recipe.name} | {recipe.cuisine}</h1>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
      </section>
      <section className="bg-white">
          <div className="container flex items-center justify-center mx-auto px-5 py-20">
                {data && (
                  <div>
                    {data.map((item, index) => (
                      <div key={index}>
                        {recipe.id === item.recipeId && (
                          <div className="flex flex-col gap-5 relative">
                            <h2>{item.title}</h2>
                            <ul className="flex flex-wrap justify-center items-center">
                              {item?.data.map((item, index) => (
                                <li className="flex ">
                                  <img
                                    key={index}
                                    className={`w-8 h-8 rounded-full border-4 border-white transform translate-y-${index + 1} transition-transform duration-300`}
                                    src={item.icon}
                                    alt={recipe.name}
                                  />
                                  <div className="flex-1 px-5">
                                    <p className="">{item?.description}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>         
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
          </div>
      </section>
      
    </main>
  );
};

export default Recipe;

