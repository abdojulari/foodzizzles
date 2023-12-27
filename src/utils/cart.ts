export interface ICart {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CartState {
    cart: ICart[];
}