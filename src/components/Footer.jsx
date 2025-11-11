import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWifi,
  FaGoogle,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#212121",
        color: "white",
        fontWeight: "220",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50%",
          width: "100%",
          padding: "15vh",
          gap: "10%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "bold",
              fontSize: "6vh",
            }}
          >
            AllBirds
          </p>
          <p>SHOE COMPANY</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>WEEBLY THEMES</p>
          <p>PRE-SALE FAQS</p>
          <p>SUBMIT A TICKET</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>SERVICES</p>
          <p>THEME TWEAK</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>SHOWCASE</p>
          <p>WIDGETKIT</p>
          <p>SUPPORT</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>AFFILIATES</p>
          <p>RESOURCES</p>
        </div>
      </div>
      <div
        style={{ width: "90%", border: "0.5px white solid", opacity: "0.7" }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15vh",
          alignItems: "center",
          height: "50%",
        }}
      >
        <div style={{ display: "flex", gap: "10%" }}>
          <FaFacebook color="white" size={40} />
          <FaTwitter color="white" size={40} />
          <FaWifi color="white" size={40} />
          <FaGoogle color="white" size={40} />
          <FaDiscord color="white" size={40} />
        </div>
        <p>
          <span style={{ fontWeight: "500" }}>©</span>Copyright, All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
