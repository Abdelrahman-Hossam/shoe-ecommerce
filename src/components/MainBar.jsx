import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { IoPersonOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";

import { TiShoppingCart } from "react-icons/ti";
import { FaQuestion } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";

import { useContext } from "react";
import { cartContext } from "./App";
export default function MainBar({ onOpenCart }) {
  const { cartIconNumber } = useContext(cartContext);
  return (
    <nav className="homePageNavBar">
      <div className="navBarLeftandRightMenu">
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "2vw",
            paddingLeft: "1vw",
          }}
        >
          <li>MEN</li>
          <li>WOMEN</li>
          <li>SOCKS</li>
          <li>SALE</li>
        </ul>
      </div>
      <div className="title">allbirds</div>
      <div
        style={{ display: "flex", gap: "2vw", alignItems: "center" }}
        className="navBarLeftandRightMenu"
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "1.5vw",
          }}
          className="navBarRightMenuGap"
        >
          <li>SUSTAINABILITY</li>
          <li>RERUN</li>
          <li>STORES</li>
        </ul>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "1vw",
            paddingRight: "1.5vw",
          }}
          className="icons"
        >
          <li>
            <AiOutlineSearch size={25} />
          </li>
          <li>
            <GoPerson size={25} />
          </li>
          <li>
            <AiOutlineQuestion size={25} />
          </li>
          <li onClick={onOpenCart}>
            <TiShoppingCart size={25} />
            {cartIconNumber}
          </li>
        </ul>
      </div>
    </nav>
  );
}
