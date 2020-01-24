import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {BandProvider} from "./components/bandContext/bandContext"

import Bands from "./pages/bands/bands";
import error from "./pages/404/404";

function App() {
  return (
    <BandProvider >
      <Switch>
        <Route path="/bands" component={Bands} />
        <Route
          path="/band"
          exact
          component={() => {
            return <Redirect to="/bands" />;
          }} />
        <Route
          path="/"
          exact
          component={() => {
            return <Redirect to="/bands" />;
          }}
        />
        <Route component={error}></Route>
      </Switch>
    </BandProvider>
  );
}

export default App;
