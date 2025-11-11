import { useContext } from "react";
import { cartContext } from "./App";
export default function CartItem({
  onCloseCart,
  onItemIncrease,
  onItemDecrease,
  data,
  isItemReadOnly,
}) {
  const { handleRemoveCartItem, cartItems, setTotalPrice } =
    useContext(cartContext);

  return data
    .filter((item, index) =>
      cartItems.some((cartItem) => cartItem.id === item.id)
    )
    .map((item, index) => {
      const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
      return (
        <div className="cartItemContainer">
          <img
            src={item.image}
            height="110px"
            width="110px"
            alt="not found"
          ></img>
          <div className="secChild">
            <div className="flexing">
              <div>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  {item.gender === "male" ? "Men" : "Women"}'s {item.product}
                </span>
              </div>
              <div style={{ fontSize: "14px" }}>Navy Night ( Navy Sole )</div>
              <div style={{ fontSize: "14px" }}>size: 9</div>
            </div>
            {!isItemReadOnly ? (
              <div className="cartButton">
                <button
                  style={{
                    color: "#d3d4d5",
                    padding: "3px",
                    fontSize: "30px",
                    fontWeight: "200",
                  }}
                  onClick={() => {
                    onItemDecrease(item.id);
                    setTotalPrice((prev) =>
                      cartItem.count >= 1 ? prev - Number(item.price) : prev
                    );
                  }}
                >
                  -
                </button>
                <span>{cartItem.count}</span>
                <button
                  style={{
                    color: "#d3d4d5",
                    padding: "3px",
                    fontSize: "30px",
                    fontWeight: "200",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    onItemIncrease(item.id);
                    setTotalPrice((prev) => prev + Number(item.price));
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <div
                style={{
                  fontWeight: "200",
                  fontFamily: "Kanit",
                }}
              >
                {cartItem.count}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "end",
              fontWeight: "300",
            }}
          >
            <button
              style={{ fontSize: "30px" }}
              onClick={() => {
                handleRemoveCartItem(item.id);
                setTotalPrice(
                  (prev) => prev - Number(cartItem.count * item.price)
                );
              }}
            >
              &times;
            </button>
            <div>${item.price}</div>
          </div>
        </div>
      );
    });
}
