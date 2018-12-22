
export const addPlayer = (player) => ({
    type: "ADD_PLAYER",
    player
});

export const removePlayer = (name) => ({
    type: "REMOVE_PLAYER",
    name
});

export const resetPlayers = () => ({
    type: "RESET_PLAYERS"
});

export const setPlayers = (players) => ({
    type: "SET_PLAYERS",
    players
});