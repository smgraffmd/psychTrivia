
export const setCategories = (categories) => ({
    type: "SET_CATEGORIES",
    categories 
});

export const setRoom = (room) => ({
    type: "SET_ROOM",
    room
});

export const resetRoom = () => ({
    type: "RESET_ROOM"
});

export const setQuestion = (question) => ({
    type: "SET_QUESTION",
    question
});

export const setMessage = (message) => ({
    type: "SET_MESSAGE",
    message
});