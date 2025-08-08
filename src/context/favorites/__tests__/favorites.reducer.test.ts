import { favoritesReducer, favoritesInitialState } from "../favorites.reducer";

test("toggle adds when missing", () => {
  const s = favoritesInitialState([]);
  const next = favoritesReducer(s, { type: "TOGGLE", id: "p1" });
  expect(next.ids.has("p1")).toBe(true);
});

test("toggle removes when exists", () => {
  const s = favoritesInitialState(["p1"]);
  const next = favoritesReducer(s, { type: "TOGGLE", id: "p1" });
  expect(next.ids.has("p1")).toBe(false);
});

test("set replaces ids", () => {
  const s = favoritesInitialState(["a"]);
  const next = favoritesReducer(s, { type: "SET", ids: ["x", "y"] });
  expect([...next.ids]).toEqual(["x", "y"]);
});
