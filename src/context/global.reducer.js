// Global
const globalReducer = (state, { type, payload }) => {

    switch (type) {
        case 'page':
            return {
                ...state,
                page: payload,
            };

        case 'menu':
            return {
                ...state,
                menu: payload,
            };

        case 'current_menu':
            return {
                ...state,
                currMenu: payload,
            };

        case 'slideshow':
            return {
                ...state,
                slideshowActive: payload,
            };

        case 'sidenav':
            return {
                ...state,
                sideNav: payload,
            };

        case 'search_box':
            return {
                ...state,
                googleSearch: {
                    ...state.googleSearch,
                    ...payload,
                },
            };

        default:
            return { ...state };
    }

};

export { globalReducer };
