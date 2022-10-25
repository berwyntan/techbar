import { useState } from "react";
import Categories from "./pages/Categories";
// import Home from "./pages/Home";
// import { UseAppContextProvider } from './context/UseAppContext'

import "./App.css";

function App() {
  
  return (
    <>
    <Categories />
    {/* <Home /> */}
    </>
    
  );
}

export default App;

// wrapping the while app in context
// <UseAppContextProvider>
      {/* We need app router here for pages rediraction*/}

      {/*<AppRouter />*/}

      
    // </UseAppContextProvider>