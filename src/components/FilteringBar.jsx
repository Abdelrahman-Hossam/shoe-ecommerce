export default function FilteringBar({
  colorCategories,
  onFilterBySizes,
  onFilterByMaterial,
  onFilterByColor,
  filterBy,
  isChecked,
  isCheckedBf,
  onRemoveFromFilterBy,
  onRemoveFilterByMaterial,
  onFilterByBestFor,
}) {
  const bestForCategories = [
    "Everyday",
    "Warm Weather",
    "Cool Weather",
    "Wet Weather",
    "Active",
  ];
  const materialCategories = [
    "Tree Fiber Blend",
    "Wool",
    "Fluff Collection",
    "Canvas",
    "Cozy & Durable Cotton Blend",
  ];
  const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14];

  return (
    <div className="sideFilters">
      <div>
        <ul className="sideFiltersCategories">
          <li>
            <span className="sideCategoryTitle">Category Name</span>
          </li>
          <li>Everyday Sneakers</li>
          <li>Active Shoes</li>
          <li>Water-Repellent Shoes </li>
          <li>Slip-Ons</li>
          <li>High Tops</li>
          <li>Hiking Shoes</li>
          <li>Sale Shoes</li>
        </ul>
      </div>
      <div className="sideCategoryTitle">
        Filter By
        <div className="filterByElementsContainer">
          {filterBy.length !== 0 ? (
            filterBy.map((item, index) => (
              <div className="filterByElementContainer" key={item + index}>
                <div>{item}</div>
                <button
                  style={{
                    backgroundColor: "#71777a",
                    borderRadius: "50%",
                    color: "white",
                    height: "20px",
                    width: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => onRemoveFromFilterBy(item)}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <span style={{ fontWeight: "250", fontSize:"2.5vh" }}>No filters applied</span>
          )}
        </div>
      </div>
      <div>
        <span className="sideCategoryTitle">SIZES</span>
        <p>
          Most of our shoes only come in full sizes. If you’re a half size,
          select your nearest whole size too.
        </p>
        <div className="sizeBoxContainer">
          {sizes.map((size) => (
            <button
              key={size}
              className="sizeBox"
              value={size}
              onClick={(e) => onFilterBySizes(e.target.value)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div>
        <span className="sideCategoryTitle">BEST FOR</span>
        <ul className="sideFiltersCategories">
          {bestForCategories.map((category, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={isCheckedBf[category.split(" ").join("")]}
                  onChange={() => onFilterByBestFor(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="sideCategoryTitle">MATERIAL</span>
        <ul className="sideFiltersCategories">
          {materialCategories.map((material, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={
                    isChecked[material.split(" ").join("").replace(/&/g, "And")]
                  }
                  onChange={() => onFilterByMaterial(material)}
                />
                {material}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="sideCategoryTitle">HUE</span>
        <ul className="sideFiltersCategories">
          {colorCategories.map((color, index) => (
            <li
              key={index}
              className="colorFilter"
              onClick={() => onFilterByColor(color.name)}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: color.hex,
                }}
              ></div>
              <span>{color.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
