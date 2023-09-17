import React from "react";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Empty from "./Empty";
import Loading from "./components/Loading";
import {useSelector} from 'react-redux'
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import store from "./store";

const App = () => {
 

  return (
    <React.StrictMode>
      <Provider store={store}>
        <HomePage/>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
