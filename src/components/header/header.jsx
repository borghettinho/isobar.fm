import React from "react";
import { Header } from "./header.styles";

export default () => {
  return (
    <Header>
      <input
        style={{ background: "#fff", border: "none" }}
        type="search"
        name="search"
        id="search"
      />
      <h1
        style={{
          color: "#fff",
          margin: "0",
          fontFamily: "'Source Sans', sans-serif"
        }}
      >
        isobar<span style={{ fontSize: "14px" }}>.fm</span>
      </h1>
    </Header>
  );
};
