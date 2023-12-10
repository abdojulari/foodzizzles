export interface RecipeInterface {
    id?: number;
    name?: string;
    image?: string;
    description?: string;
    date?: Date | string;
    duration?: number;
    category?: string;
    cuisine?: string;
}

export interface AdditionalDetails {
    id?: number;
    recipeId?: number;
    description?: string;
    image?: string[];
}