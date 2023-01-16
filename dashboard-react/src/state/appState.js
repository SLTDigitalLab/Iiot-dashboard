import { createContext, useContext, useReducer } from "react";

const initialState = {
    theme: 'light',
    drawer: false
}

function reducer(state, action){
    switch (action.type) {
        case 'drawer':
            return{...state,drawer: !state.drawer}
        case 'theme-switch':
            return{...state,theme: state.theme === 'light' ? 'dark':'light'};
        default:
            throw new Error();
    }
}

const AppStateContext = createContext({});
export const useAppState = () => useContext(AppStateContext)
function AppState({children}){
    const [state, dispatch] =useReducer(reducer,initialState);

    const value = {state, dispatch}

    return(
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    )
}
export default AppState;