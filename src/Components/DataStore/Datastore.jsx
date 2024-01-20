import { createContext, useState } from "react";
import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";

export let Store = createContext({});





const Datastore = ({ children }) => {
    return <Store.Provider value={{ }} >
        {children }
  </Store.Provider>;
};

export default Datastore;
