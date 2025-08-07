import type { CategoryItem } from "./HeaderBottom.types";
import CategoriesMenuTrigger from "./CategoriesMenuTrigger";

export default function CategoriesMenu({ items }: { items: CategoryItem[] }) {
  if (!items.length) return null;

  return (
    <div className="me-4 w-4/12 lg:w-2/12 h-full flex justify-center">
      <CategoriesMenuTrigger items={items} />
    </div>
  );
}
