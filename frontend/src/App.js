import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Main/First_page.js";
import "./Assets/App.css";
import Acceuiladmin from "./AdminSection/Desktop";
import Acceuilcand from "./UserSection/Desktop";
import Acceuilemp from "./AdminSection/DesktopStaff";
import "semantic-ui-css/semantic.min.css";

/**
 * We declare the general variables to link between components
 * Variable Permission makes sure that it blocks the access to a page through the URL search bar
 * The function handleAuthorization makes sure to change the permission access
 * 
 */

export default function App() {
  const [permissionCandidate, setpermmessioncond] = useState(false);
  const [permissionAdmin, setpermmessionadmin] = useState(false);
  const handleAuthorization = function () {
    setpermmessioncond(true);
  };
  const handleAuthorizationSuper = function () {
    setpermmessionadmin(true);
  };
  const [idc, setidc] = useState("");
  const changecin = function (e) {
    setidc(e);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Home
            functCandidat={handleAuthorization}
            functAdmin={handleAuthorizationSuper}
            idCandidat={changecin}
          />
        )}
      />
      <Route
        exact
        path="/condidat"
        component={() => (
          <Acceuilcand authorized={permissionCandidate} idcon={idc} />
        )}
      />
      <Route
        exact
        path="/admin"
        component={() => <Acceuiladmin authorized={permissionAdmin} />}
      />
      <Route
        exact
        path="/emp"
        component={() => <Acceuilemp authorized={permissionAdmin} />}
      />
    </Switch>
  );
}