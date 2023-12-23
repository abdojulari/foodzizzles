
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
    <main className="mt-[8rem] bg-stone-100">
      <section></section>
      <section className="flex flex-wrap my-20">
            <div className="max-w-screen-xl mx-auto px-8 sm:px-16 md:px-20">
                { recipe && (
                  <div className="relative flex flex-col md:flex-row p-5">
                    <div className=" md:w-2/5 mb-6 md:mb-0">
                      <img
                        className="w-full  h-96 object-cover md:absolute md:left-20 md:top-20 md:w-2/5"
                        src={recipe.image}
                        alt={recipe.name}
                      />
                    </div>
                    <div className="md:border-2 md:border-gray-400  md:w-3/5 md:ml-6 md:p-20">
                      <h1 className="text-2xl text-lemon">{recipe.name} | {recipe.cuisine}</h1>
                      <p>{recipe.description}</p>
                    </div>
                  </div>
                  
                )}
            </div>
      </section>
      <section className="bg-white">
          <div className="container flex items-center justify-center mx-auto p-20">
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

