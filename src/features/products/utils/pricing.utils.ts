export function calcDiscount(oldPrice?: number, price?: number) {
  if (!oldPrice || !price || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
