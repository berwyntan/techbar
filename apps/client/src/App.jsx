/*
import { useState } from "react";
import Categories from "./pages/Categories";
// import Home from "./pages/Home";
// import { UseAppContextProvider } from './context/UseAppContext'

import "./App.css";

function App() {
  return (
    <>
      <Categories />
     
    </>
  );
}

export default App;
*/

// ! NEW PROPOSED CODE
import AppRouter from "./config/Router";
import { UseAppContextProvider } from "./context/UseAppContext"; // importing context
import "./App.css";

// wrapping the while app in context
function App() {
  return (
    <UseAppContextProvider>
      {/* App router for pages rediraction*/}
      <AppRouter />
    </UseAppContextProvider>
  );
}

export default App;
