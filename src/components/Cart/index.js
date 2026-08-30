import { useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";
import {
  CartButton,
  CartCount,
  Panel,
  PanelHeader,
  CloseButton,
  Row,
  QtyControls,
  Total,
  Empty,
} from "./Cart";

/**
 * Cart control for the navigation bar: a button carrying the item count, plus
 * a preview panel listing what is in the basket.
 */
const Cart = () => {
  const {
    items,
    count,
    total,
    isOpen,
    openCart,
    closeCart,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useCart();

  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Escape closes the preview and returns focus to the button that opened it,
  // so a keyboard user is never left stranded inside a dismissed panel.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCart();
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        closeCart();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <CartButton
        ref={buttonRef}
        type="button"
        onClick={isOpen ? closeCart : openCart}
        aria-expanded={isOpen}
        aria-controls="cart-panel"
        aria-label={
          count === 0 ? "Cart, empty" : `Cart, ${count} item${count === 1 ? "" : "s"}`
        }
      >
        <span aria-hidden="true">🛒</span>
        <span>Cart</span>
        {count > 0 && <CartCount aria-hidden="true">{count}</CartCount>}
      </CartButton>

      {isOpen && (
        <Panel
          id="cart-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Shopping cart"
        >
          <PanelHeader>
            <h2>Your cart</h2>
            <CloseButton type="button" onClick={closeCart} aria-label="Close cart">
              ×
            </CloseButton>
          </PanelHeader>

          {items.length === 0 ? (
            <Empty>Your cart is empty.</Empty>
          ) : (
            <>
              {items.map((item) => (
                <Row key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.price}</small>
                  </div>
                  <QtyControls>
                    <button
                      type="button"
                      onClick={() => decrementItem(item.name)}
                      aria-label={`Remove one ${item.name}`}
                    >
                      −
                    </button>
                    <span aria-label={`Quantity: ${item.qty}`}>{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => addItem(item)}
                      aria-label={`Add another ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.name)}
                      aria-label={`Remove ${item.name} from the cart`}
                    >
                      ×
                    </button>
                  </QtyControls>
                </Row>
              ))}

              <Total>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </Total>

              <CloseButton
                as="button"
                type="button"
                onClick={clearCart}
                style={{ fontSize: "0.9rem" }}
              >
                Clear cart
              </CloseButton>
            </>
          )}
        </Panel>
      )}
    </>
  );
};

export default Cart;
