import { useState } from "react";
import Categories from "./pages/Categories";

import "./App.css";

function App() {
  // wrapping the while app in context
  return (
    <UseAppContextProvider>
      {/* We need app router here for pages rediraction*/}
      <AppRouter />
    </UseAppContextProvider>
  );
}

export default App;
