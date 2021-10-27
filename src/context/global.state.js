import React, { createContext, useReducer } from 'react';
import { globalReducer } from './global.reducer';

// Global
const globalInitState = {
    page: '',
    menu: {
        level1: '',
        level2: '',
        level1Link: '',
    },
    slideshowActive: 0,
};

// Create Context
const GlobalContext = createContext(null);

// Provider
const GlobalProvider = ({ children }) => {

    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitState);
    const {
        page,
        menu,
        slideshowActive,
    } = globalState;
    const { Provider } = GlobalContext;

    return (

        <Provider value={{
            // 全域資料
            page,
            menu,
            slideshowActive,

            // Dispatch
            globalDispatch,
        }}>
            {children}
        </Provider>

    );

};

export { GlobalContext, GlobalProvider };
