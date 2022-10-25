import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        categoryData,
        setCategoryData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

// !this is what I propose
/*
import { createContext, useState } from "react";

const AppContext = createContext();

export function UseAppContextProvider({ children }) {
    return (
        <AppContext.Provider 
        //here we return all functions >
  {children}
        </AppContext.Provider>
    );
};

// export the whole context
export function useAppContext() {
    return useContext(AppContext);
}

*/
