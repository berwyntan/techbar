import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    
    const [categoryData, setCategoryData] = useState([]);
    

    return (
        <AppContext.Provider value={{ 
            categoryData,
            setCategoryData,
         }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;