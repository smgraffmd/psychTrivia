export default (state = "", action) => {
    switch (action.type) {
        case "MESSAGE" :
            console.log(action.msg)
            return action.msg;
        default : 
            return state;
    }
}