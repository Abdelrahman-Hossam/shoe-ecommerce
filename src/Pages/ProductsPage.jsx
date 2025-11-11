import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Items from "../components/Items.jsx";
import FilteringBar from "../components/FilteringBar.jsx";

export default function ProductsPage({
  data,
  change,
  onCloseCart,
  onOpenCart,
  isCartOpen,
  onItemDecrease,
  onItemIncrease,
  colorCategories,
  onRemoveFromFilterBy,
  isLoading,
}) {
  const [filterBy, setFilterBy] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [filterState, setFilterState] = useState({
    size: [],
    color: [],
    material: [],
    bestFor: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 8;
  let lastIndex = currentPage * itemsPerPage;
  let firstIndex = lastIndex - itemsPerPage;

  function handleCurrentPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        (filterState.size?.length === 0 ||
          item.size.some((itemSizes) =>
            filterState.size?.includes(itemSizes)
          )) &&
        (filterState.color?.length === 0 ||
          item.color.some((itemColor) =>
            filterState.color?.includes(itemColor)
          )) &&
        (filterState.material?.length === 0 ||
          filterState.material?.includes(item.material)) &&
        (filterState.bestFor?.length === 0 ||
          filterState.bestFor?.includes(item.category))
      );
    });
    setFilteredData(filtered);
  }, [filterState, data]);

  console.log(data);

  const [isCheckedBf, setIsCheckedBf] = useState({
    Everyday: false,
    WarmWeather: false,
    CoolWeather: false,
    WetWeather: false,
    Active: false,
  });
  const [isChecked, setIsChecked] = useState({
    TreeFiberBlend: false,
    Wool: false,
    FluffCollection: false,
    Canvas: false,
    CozyAndDurableCottonBlend: false,
  });

  function handleFilterBySizes(pickedSize) {
    setFilterBy((prev) => [...prev, pickedSize]);
    setFilterState((prev) => ({
      ...prev,
      size: [...prev.size, pickedSize],
    }));
  }
  function handleFilterByMaterial(material) {
    const key = material.split(" ").join("").replace(/&/g, "And");

    setIsChecked((prev) => {
      const newCheckedState = !prev[key];

      setFilterBy((prev) =>
        newCheckedState
          ? [...prev, material]
          : prev.filter((item) => item !== material)
      );

      setFilterState((prev) =>
        newCheckedState
          ? {
              ...prev,
              material: [...prev.material, material],
            }
          : {
              ...prev,
              material: [...prev.material].filter((item) => item !== material),
            }
      );

      return {
        ...prev,
        [key]: newCheckedState,
      };
    });
  }
  function handleRemoveFromFilterBy(removedItem) {
    setFilterBy((prev) => prev.filter((item) => item !== removedItem));
    setFilterState((prev) => {
      const updated = {};
      for (let key in prev) {
        updated[key] = prev[key].filter((item) => item !== removedItem);
      }
      return updated;
    });

    // also uncheck checkboxes if needed:
    const keyMat = removedItem.split(" ").join("").replace(/&/g, "And");
    const keyBf = removedItem.split(" ").join("");

    setIsChecked((prev) => ({ ...prev, [keyMat]: false }));
    setIsCheckedBf((prev) => ({ ...prev, [keyBf]: false }));
  }

  function handleFilterByBestFor(category) {
    const key = category.split(" ").join("");
    setIsCheckedBf((prev) => {
      const newCheckedStateBf = !prev[key];

      setFilterBy((prev) =>
        newCheckedStateBf
          ? [...prev, category]
          : prev.filter((item) => item !== category)
      );

      setFilterState((prev) =>
        newCheckedStateBf
          ? { ...prev, bestFor: [...prev.bestFor, category] }
          : {
              ...prev,
              bestFor: [...prev.bestFor].filter((item) => item !== category),
            }
      );

      return { ...prev, [key]: newCheckedStateBf };
    });
  }

  function handleFilterByColor(pickedColor) {
    setFilterBy((prev) => [...prev, pickedColor]);
    setFilterState((prev) => ({
      ...prev,
      color: [...prev.color, pickedColor],
    }));
  }

  return (
    <>
      <button className="homeButton">
        <Link to="/" className="homeLink">
          Home /
        </Link>
      </button>
      <div className="productPageContainer">
        <FilteringBar
          colorCategories={colorCategories}
          onFilterBySizes={handleFilterBySizes}
          onFilterByMaterial={handleFilterByMaterial}
          onFilterByColor={handleFilterByColor}
          filterBy={filterBy}
          isChecked={isChecked}
          onRemoveFromFilterBy={handleRemoveFromFilterBy}
          isCheckedBf={isCheckedBf}
          onFilterByBestFor={handleFilterByBestFor}
        />
        <div className="ItemsWrapper">
          <Items
            filteredData={filteredData}
            colorCategories={colorCategories}
            data={data}
            onOpenCart={onOpenCart}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            totalItems={filteredData.length}
            onCurrentPageChange={handleCurrentPageChange}
          />
        </div>
      </div>
    </>
  );
}
