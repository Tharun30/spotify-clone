export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAQF9pjTa1PsvYsnm5JrZHCphg3dpMQs2OvCEf52m8zuvbfmk32vVsgvI8M7L-UTZbs8MPXf2ACOkpAxNbJ2zKlrzG7NVMykqqpTEVrzNxmRahVrFQDNSE2tDWsWWsDfTHukI0fUjnJPa97NbIbItUcoqeshzKcuIRFYOz2TQpgz7iW",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;