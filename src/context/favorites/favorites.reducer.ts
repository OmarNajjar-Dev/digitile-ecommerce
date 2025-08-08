export type FavoritesState = { ids: Set<string> };

export type FavoritesAction = 
  | { type: "TOGGLE"; id: string }
  | { type: "SET"; ids: string[] };

export function favoritesInitialState(ids?: string[]): FavoritesState {
  return { ids: new Set(ids ?? []) };
}

export function favoritesReducer(
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState {
  switch (action.type) {
    case "TOGGLE": {
      const next = new Set(state.ids);
      if (next.has(action.id)) {
        next.delete(action.id);
      } else {
        next.add(action.id);
      }
      return { ids: next };
    }
    case "SET":
      return { ids: new Set(action.ids) };
    default:
      return state;
  }
}
