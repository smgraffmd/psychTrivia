const defaultGame = {
    categories: [],
    room: "",
    
};

export default (state = defaultGame, action) => {
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
        case "RESET_ROOM":
            return {
                ...state,
                room: ""
            };
        default:
            return state;
    };
};