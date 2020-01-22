import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Band from "./pages/band/band";
import Bands from "./pages/bands/bands";
import error from "./pages/404/404";

function App() {
  return (
    <Switch>
      <Route path="/bands" component={Bands} />
      <Route path="/band" component={Band} />
      <Route
        path="/"
        exact
        component={() => {
          return <Redirect to="/bands" />;
        }}
      />
      <Route component={error}></Route>
    </Switch>
  );
}

export default App;
