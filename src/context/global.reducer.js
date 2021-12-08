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
                searchBox: payload,
            };

        default:
            return { ...state };
    }

};

export { globalReducer };
