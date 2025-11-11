import { cartContext } from "./App";
import { useContext } from "react";

export default function Item({
  id,
  data,
  image,
  gender,
  material,
  product,
  price,
  colors,
  size,
  onOpenCart,
}) {
  const { handleAddToCart, setTotalPrice } = useContext(cartContext);

  const colorCategories = [
    { name: "Grey", hex: "#8c8c8c" },
    { name: "Black", hex: "#3b3b3b" },
    { name: "White", hex: "#f5f4f0" },
    { name: "Blue", hex: "#49607c" },
    { name: "Beige", hex: "#b9afa1" },
    { name: "Red", hex: "#b14754" },
    { name: "Green", hex: "#69715e" },
    { name: "Brown", hex: "#bd9474" },
    { name: "Yellow", hex: "#ead99a" },
  ];

  return (
    <div
      className="itemContainer"
      onClick={() => {
        handleAddToCart(id);
        setTotalPrice((prev) => prev + Number(price));
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <img
          src={image}
          alt="not found"
          style={{
            height: "35vh",
            width: "20vw",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div>
        <div style={{ fontWeight: "600", fontSize: "2.3vh" }}>
          {gender === "male" ? "Men" : "Women"}'s {material} {product}
        </div>
        <div style={{ fontWeight: "400", fontSize: "2.3vh" }}>${price}</div>
      </div>
      <div style={{ paddingTop: "2vh", display: "flex", gap: "1vw" }}>
        {colorCategories?.map((item) => {
          return colors.includes(item.name) ? (
            <div
              key={item.hex}
              style={{
                height: "3vh",
                width: "1.5vw",
                borderRadius: "50%",
                border: "1px solid black",
                backgroundColor: item.hex,
              }}
            ></div>
          ) : null;
        })}
      </div>
    </div>
  );
}
