import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Properties from "./pages/Properties";

const App = () => (
  <BrowserRouter>
    <React.Suspense>
      <Switch>
        <Route
          exact
          path="/login"
          name="Login"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/"
          name="Propriedades"
          render={(props) => <Properties {...props} />}
        />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
