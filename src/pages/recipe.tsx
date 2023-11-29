
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeInterface } from '../utils/RecipeInterface';
import recipes from '../mock/recipe.json'

const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeInterface | null>(null);

  useEffect(() => {
    // Fetch the recipe details based on the id
    // You need to implement your own logic for fetching the details
    // For example, you can use the id to filter the recipes array
    // and set the details using setRecipe
    const selectedRecipe = recipes.find(recipe => recipe.id === Number(id));
    if (selectedRecipe) {
        setRecipe(selectedRecipe);
      }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <main className="mt-20 p-20">
       <section className="flex flex-wrap">
            <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16">
                { recipe && (
                    <>
                        <img src={recipe.image} alt={recipe.name} />
                        <h2>{recipe.name} | {recipe.cuisine}</h2>
                        <p>{recipe.description}</p>
                    </>
                )}
            </div>
      </section>
      
    </main>
  );
};

export default Recipe;

