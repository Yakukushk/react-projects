import { createContext } from "react";

export const Context = createContext({

});

function createReducer(state, action) {
 
}

export default function ContextProvider({children}) {
    return(
        <Context.Provider>{children}</Context.Provider>
    )
}