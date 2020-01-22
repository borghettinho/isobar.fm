import React from "react";
import { Switch, Route } from "react-router-dom";

import Band from "./pages/band/band";
import Bands from "./pages/bands/bands";

import Layout from "./pages/layout/layout";

function App() {
  return (
    <Switch>
      <Route path="/bands">
        <Layout>
          <Bands />
        </Layout>
      </Route>
      <Route path="/band">
        <Layout>
          <Bands />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
