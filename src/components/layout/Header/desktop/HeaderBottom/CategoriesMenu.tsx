// CategoriesMenu.tsx

/**
 * Wrapper component that centers {@link CategoriesMenuTrigger} inside the header.
 *
 * @param props.items - List of categories; returns `null` when empty.
 */
import type { CategoryItem } from "./header-bottom.types";
import CategoriesMenuTrigger from "./CategoriesMenuTrigger";

export default function CategoriesMenu({ items }: { items: CategoryItem[] }) {
  if (!items.length) return null;

  return (
    <div className="me-4 w-4/12 lg:w-2/10 h-full flex justify-center">
      <CategoriesMenuTrigger items={items} />
    </div>
  );
}
