const defaultGame = {
    categories: [],
    room: "",
    question: {},
    message: ""
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
        case "SET_QUESTION": 
            return {
                ...state,
                question: action.question
            }
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    };
};