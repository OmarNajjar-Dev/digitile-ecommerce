export interface CartControlsProps {
  id: string;
  name: string;
  image: string;
  price: number;
  currency?: string;

  isSoldOut?: boolean;
  hasVariants?: boolean;

  className?: string;
  onOptionsClick?: (id: string) => void; // optional hook for OPTIONS flow
}
