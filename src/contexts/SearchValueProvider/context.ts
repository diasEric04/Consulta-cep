import { createContext } from "react";
import { ContextType } from "./typing";

export const SearchValueContext = createContext<ContextType>({} as ContextType)