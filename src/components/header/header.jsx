import React from "react";
import {Link} from 'react-router-dom';

import { Header } from "./header.styles";
import Search from '../search/search'


export default () => {
  return (
    <Header>
      <Search />
      <h1 aria-label="isobar.fm">
        <Link to="/">
          <img src="/assets/logo.png"/>
        </Link>
      </h1>
    </Header>
  );
};
