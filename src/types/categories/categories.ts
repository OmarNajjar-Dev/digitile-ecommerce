/**
 * Localised category name.
 */
export interface CategoryName {
  /** Arabic label. */
  ar: string;
  /** English label. */
  en: string;
}

/**
 * Single category entry.
 */
export interface CategoryItem {
  id: number;
  slug: string;
  name: CategoryName;
  image: string;
}

/**
 * Server payload for the categories endpoint.
 */
export interface CategoriesPayload {
  /** Hero/banner image shown above the list. */
  banner_image: string;
  /** Array of available categories. */
  categories: CategoryItem[];
}

/**
 * Full API response wrapper.
 */
export interface CategoriesResponse {
  /** HTTP-style status code (200 = OK). */
  status: number;
  /** Actual data returned by the endpoint. */
  response: CategoriesPayload;
  /** Human-readable message. */
  message: string;
}

/* -------------------------------------------------------------------------- */
/* Example: binding the constant to the new type                              */
/* -------------------------------------------------------------------------- */
// export const categories: CategoriesResponse = { … };
