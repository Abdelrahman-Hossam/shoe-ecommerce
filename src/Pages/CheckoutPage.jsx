import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../components/App.jsx";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

const CheckoutPage = ({
  data,
  onItemIncrease,
  onCloseCart,
  onItemDecrease,
}) => {
  const { cartItems, totalPrice } = useContext(cartContext);
  const [states, setStates] = useState([]);
  const schema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid Email Address"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/mshafrir/2646763/raw/states_titlecase.json"
        );
        const data = await res.json();
        setStates(data);
      } catch (error) {
        console.error("error fetching your states", error);
      }
    };
    fetchStates();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "3vh",
          backgroundColor: "white",
        }}
      >
        <button style={{ backgroundColor: "white", fontSize: "2vh" }}>
          <Link
            to="/"
            style={{
              color: "black",
            }}
          >
            &larr; Home
          </Link>
        </button>
        <span
          style={{
            paddingLeft: "17%",
            fontFamily: "Dancing Script",
            fontWeight: "bold",
            fontSize: "6vh",
          }}
        >
          allbirds
        </span>
      </div>
      <div style={{ borderBottom: "1px solid gray" }}></div>

      <div className="checkout-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "2vh" }}
          className="form-container"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <label
              htmlFor="email"
              style={{ fontWeight: "400", fontSize: "2.4vh" }}
            >
              Contact
            </label>
            <input {...register("email")} placeholder="Email" id="email" />

            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1vw",
              alignItems: "center",
            }}
          >
            <input type="checkbox" id="checkbox" />
            <label
              htmlFor="checkbox"
              style={{ fontWeight: "400", fontSize: "2vh" }}
            >
              Email me with news and offers
            </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <label
              htmlFor="countries"
              style={{ fontWeight: "400", fontSize: "2.4vh" }}
            >
              Delivery
            </label>
            <select style={{ height: "7vh" }} id="countries">
              <option>USA</option>
              <option>Egypt</option>
              <option>Algeria</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.1vh",
            }}
          >
            <input
              {...register("firstname")}
              placeholder="First name"
              style={{ flex: "1", height: "90%" }}
            />
            <p style={{ color: "red", minHeight: "1vh", fontSize: "1.5vh" }}>
              {errors.firstname?.message || ""}
            </p>

            <input
              {...register("lastname")}
              placeholder="Last name"
              style={{ flex: "1" }}
            />
            {errors.lastname && (
              <p style={{ color: "red" }}>{errors.lastname.message}</p>
            )}
          </div>
          <input placeholder="Company (optional)" />
          <input placeholder="Address" />
          <input placeholder="Apartment, suite, etc.(optional)" />
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <input placeholder="City" style={{ width: "100%", flex: "1" }} />
            <select
              placeholder="State"
              style={{ width: "100%", flex: "2" }}
              defaultValue={""}
            >
              <option value="" disabled hidden>
                -- Select a State --
              </option>
              {states.map((state) => (
                <option key={state.abbreviation}>{state.name}</option>
              ))}
            </select>
            <input
              placeholder="ZIP code"
              style={{ width: "100%", flex: "1" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2" style={{ fontSize: "2vh" }}>
              Text me with news and offers
            </label>
          </div>
          <button type="submit"> Submit </button>
        </form>
        <div style={{ width: "50%" }}>
          {/* checkout items container*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              scale: "0.80",
            }}
          >
            <div style={{ width: "60%" }}>
              <CartItem
                data={data}
                onItemIncrease={onItemIncrease}
                onCloseCart={onCloseCart}
                onItemDecrease={onItemDecrease}
                isItemReadOnly={true}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "4vh",
                }}
              >
                <div>Subtotal</div>
                <div>${Number(totalPrice.toFixed(2))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
