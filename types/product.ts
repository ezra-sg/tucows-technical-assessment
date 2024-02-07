export enum ProductStatus {
    purple = 'purple',
    green = 'green',
    orange = 'orange',
    red = 'red',
}

export interface Product {
    product: string;
    serial: string;
    id: number;
    quantity: string;
    total: number;
    status: ProductStatus;
    imageUrl: string;
}
