import Link from "next/link";
import { Heart, ShoppingCart, UserRound } from "lucide-react";

export default function IconBar() {
  return (
    <>
      <Link href="/wishlist" aria-label="Wishlist">
        <Heart className="h-7 w-7 text-primary" />
      </Link>

      <Link href="/cart" aria-label="Cart">
        <ShoppingCart className="h-7 w-7 text-primary" />
      </Link>

      <Link href="/account" aria-label="Account">
        <UserRound className="h-7 w-7 text-primary" />
      </Link>
    </>
  );
}
