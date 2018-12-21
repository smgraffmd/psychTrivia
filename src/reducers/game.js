const defaultCategories = {
    categories: []
};

export default (state = defaultCategories, action) => {
    switch(action.type) {
        case "SET_CATEGORIES": 
            return {
                ...state,
                categories: action.categories
            };
        case "SET_ROOM":
            return {
                ...state,
                room: action.room
            };
        default:
            return state;
    };
};