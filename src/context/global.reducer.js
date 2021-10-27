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

        default:
            return { ...state };
    }

};

export { globalReducer };
