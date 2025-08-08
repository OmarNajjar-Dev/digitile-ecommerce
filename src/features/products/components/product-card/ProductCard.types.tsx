export interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    currency?: string;
    isFavorite?: boolean;
    isSoldOut?: boolean;
    hasVariants?: boolean;
    description?: string;
    href?: string;
}
