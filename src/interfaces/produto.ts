export interface ProdutoProps {
    product_name: string;
    product_description: string;
    product_category: string;
    product_price: number;
    product_quantity: number;
    product_weight: number;
    product_dimensions: string;
    product_manufacturer: string;
    product_release_date: string;
    product_warranty: string;
    product_image: string;
}

export interface AllProductsProps {
    product: ProdutoProps
}