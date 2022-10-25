import { useContext } from "react";
import AppContext from "../context/UseAppContext";

// export the whole context
export default function useAppContext() {
    return useContext(AppContext);
}