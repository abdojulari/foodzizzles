import recipes from '../mock/recipe.json';
import { useQuery } from '@tanstack/react-query';

const useRecipes = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['recipe '],
        queryFn: () => recipes
    })
    
    if (isLoading)  return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    if (data) return data;
}

export default useRecipes;