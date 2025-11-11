import { useContext } from "react";
import CartItem from "./CartItem";
import { cartContext } from "./App";
import { Link } from "react-router-dom";

export default function ShoppingCart({
  data,
  onOpenCart,
  onCloseCart,
  onItemIncrease,
  onItemDecrease,
}) {
  const { totalPrice, cartIconNumber, cartItems, setCheckingOut } =
    useContext(cartContext);

  return (
    <>
      <div className="overlay" onClick={onCloseCart}></div>
      <div className="cart">
        <div className="cartPart">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "#b8d1dc solid 9px",
            }}
          >
            <button style={{ fontSize: "50px" }} onClick={onCloseCart}>
              &times;
            </button>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "20px" }}>🛒{cartIconNumber}</div>
              <div>
                {totalPrice > 550
                  ? "You now have free shipping!"
                  : `You are $${Number(550 - totalPrice).toFixed(
                      0
                    )} away from free shipping !`}
              </div>
            </div>
          </div>

          {!cartIconNumber && cartItems.length === 0 ? (
            <>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontWeight: "500" }}>Your Cart is Empty</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button className="ec-btn" onClick={onCloseCart}>
                  <Link to="/Products" style={{ all: "unset" }}>
                    SHOP MEN'S
                  </Link>
                </button>
                <button className="ec-btn">SHOP WOMEN'S</button>
                <button className="ec-btn">SHOP SOCKS</button>
              </div>
            </>
          ) : (
            <CartItem
              isItemReadOnly={false}
              onCloseCart={onCloseCart}
              onItemIncrease={onItemIncrease}
              data={data}
              onItemDecrease={onItemDecrease}
            />
          )}
        </div>
        {!cartIconNumber && cartItems.length === 0 ? null : (
          <div className="purchaseDetails">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Subtotal</div>
              <div>${Number(totalPrice.toFixed(2))}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Shipping</div>
              <div>{totalPrice > 550 ? "FREE" : "$50"}</div>
            </div>

            <button
              className="btn--checkout"
              onClick={() => {
                onCloseCart();
                setCheckingOut(true);
              }}
            >
              <Link to={"/Checkout"}>PROCEED TO CHECKOUT</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
