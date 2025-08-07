/**
 * MainLinks component.
 *
 * Renders a center-aligned list of primary navigation links inside the header.
 *
 * @param props.links - Array of navigation objects (label · href).
 * @returns Unordered list of links, or `null` when the array is empty.
 */
import Link from "next/link";
import type { PrimaryLink } from "./HeaderBottom.types";

/** Centre-aligned list of primary navigation links. */
export default function MainLinks({ links }: { links: PrimaryLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="flex w-5/12 lg:w-7/12 items-center justify-start gap-10 font-bold">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="capitalize font-extrabold transition-colors hover:text-primary"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
