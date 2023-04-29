import { createContext } from "react";
import { ContextType } from "./typing";

export const SearchContext = createContext<ContextType>({} as ContextType)