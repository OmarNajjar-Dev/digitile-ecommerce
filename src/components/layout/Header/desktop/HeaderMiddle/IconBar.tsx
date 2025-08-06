/**
 * IconBar Component
 *
 * A navigation bar component that displays clickable icons for user actions:
 * - Wishlist (heart icon)
 * - Shopping cart
 * - User account
 *
 * Each icon is wrapped in a Next.js Link component for client-side navigation.
 *
 * @component
 * @example
 * ```tsx
 * import { IconBar } from "@/components/layout/Header/desktop/HeaderMiddle";
 *
 * function Header() {
 *   return (
 *     <div className="header">
 *       <IconBar />
 *     </div>
 *   );
 * }
 * ```
 */
import Link from "next/link";
import { Heart, ShoppingCart, UserRound } from "lucide-react";

/**
 * IconBar component that renders navigation icons for user actions
 *
 * @returns {JSX.Element} A fragment containing three navigation links with icons
 */
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
