import Item from "./Item.jsx";
export default function Items({
  filteredData,
  onOpenCart,
  firstIndex,
  lastIndex,
  itemsPerPage,
  currentPage,
  totalItems,
  onCurrentPageChange,
}) {
  let paginationBar = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage) + 1; i++) {
    paginationBar.push(i);
  }
  console.log(paginationBar);

  return (
    <div>
      <div className="itemsContainer">
        {filteredData.slice(firstIndex, lastIndex).map((item, index) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            gender={item.gender}
            material={item.material}
            product={item.product}
            price={item.price}
            colors={item.color}
            size={item.size}
            onOpenCart={onOpenCart}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {paginationBar.map((item) => (
          <div
            style={{
              padding: "20px",
              color: "black",
              width: "1vw",
              height: "1vw",
              textDecoration: currentPage === item ? "underline" : "none",
              cursor: "pointer",
            }}
            onClick={() => {
              onCurrentPageChange(item);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
