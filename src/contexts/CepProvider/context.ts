import { createContext } from "react";
import { ContextType } from "./typing";

export const CepContext = createContext<ContextType>({} as ContextType)