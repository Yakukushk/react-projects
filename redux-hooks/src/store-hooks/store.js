import { useEffect, useState } from "react";

let globalState = {};
let listerners = [];
let actions = {};

export const useStore = (shouldListen = true ) => {
    const setState = useState(globalState)[1];
    const dispatch = actionIdenitifier => {
        const newState = actions[actionIdenitifier](globalState);
        globalState = {...globalState, ...newState};
        for(const listener of listerners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if(shouldListen) {
            listerners.push(setState);
        }
        return () => {
            if(shouldListen) {
                listerners = listerners.filter(li => li !== setState);
            }
        }
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
   if(initialState) {
    globalState = {...globalState, initialState};
   }
}