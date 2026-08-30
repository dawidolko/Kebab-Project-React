import { createContext, useCallback, useContext, useMemo, useReducer } from "react";

/*
  The cart lives in a context rather than in the page component because three
  separate parts of the tree need it: the product buttons that add to it, the
  navbar badge that counts it, and the preview panel that lists it.

  Quantities are keyed by product name, which is unique in the data file and is
  also what the user sees — so a duplicate key would be a visible data bug
  rather than a silent one.
*/

const CartContext = createContext(null);

const initialState = { items: [], isOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((i) => i.name === action.item.name);
      const items = existing
        ? state.items.map((i) =>
            i.name === action.item.name ? { ...i, qty: i.qty + 1 } : i
          )
        : [...state.items, { ...action.item, qty: 1 }];
      // Opening on add is the feedback that the click did something; without it
      // the only change is a small number in the corner, which is easy to miss.
      return { items, isOpen: true };
    }
    case "remove":
      return { ...state, items: state.items.filter((i) => i.name !== action.name) };
    case "decrement": {
      const items = state.items
        .map((i) => (i.name === action.name ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      return { ...state, items };
    }
    case "clear":
      return { ...state, items: [] };
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

/** Prices are authored as "$12.99" strings, so parse before summing. */
function priceToNumber(price) {
  const parsed = Number.parseFloat(String(price).replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = useCallback((item) => dispatch({ type: "add", item }), []);
  const removeItem = useCallback((name) => dispatch({ type: "remove", name }), []);
  const decrementItem = useCallback((name) => dispatch({ type: "decrement", name }), []);
  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);
  const openCart = useCallback(() => dispatch({ type: "open" }), []);
  const closeCart = useCallback(() => dispatch({ type: "close" }), []);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0);
    const total = state.items.reduce((sum, i) => sum + priceToNumber(i.price) * i.qty, 0);
    return {
      items: state.items,
      isOpen: state.isOpen,
      count,
      total,
      addItem,
      removeItem,
      decrementItem,
      clearCart,
      openCart,
      closeCart,
    };
  }, [state, addItem, removeItem, decrementItem, clearCart, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
