const defaultPlayersState = [];

export default (state = defaultPlayersState, action) => {
    switch (action.type) {
        case "ADD_PLAYER" :
            return [...state, action.player];
        case "REMOVE_PLAYER": 
            return state.filter((player) => player.name !== action.name);
        case "RESET_PLAYERS" : 
            return defaultPlayersState
        default: 
            return state;
    }
}