export type Anchor = 'right';

export type TProdutos = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    count: number
}

export type TStore = {
    produtos: any;
    carrinho: any
}

export type TProdutosState = {
    data: never[] | TProdutos[];
    status: string;
    error: string | undefined;
}