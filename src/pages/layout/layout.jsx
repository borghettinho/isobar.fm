import React from "react";
import Header from "../../components/header/header";
import { Main } from "./layout.styles";

export default ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
