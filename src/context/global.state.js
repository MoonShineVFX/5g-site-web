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
    currMenu: '',
    slideshowActive: 0,
    sideNav: false,
    googleSearch: {
        visible: false,
        value: '',
    },
};

// Create Context
const GlobalContext = createContext(null);

// Provider
const GlobalProvider = ({ children }) => {

    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitState);
    const {
        page,
        menu,
        currMenu,
        slideshowActive,
        sideNav,
        googleSearch,
    } = globalState;
    const { Provider } = GlobalContext;

    return (

        <Provider value={{
            // 全域資料
            page,
            menu,
            currMenu,
            slideshowActive,
            sideNav,
            googleSearch,

            // Dispatch
            globalDispatch,
        }}>
            {children}
        </Provider>

    );

};

export { GlobalContext, GlobalProvider };
