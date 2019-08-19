import React, { Fragment, useEffect } from "react";
import Searchbar from "./components/layout/SearchNavbar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  // init materialize JS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
