const gostFilterReducer = (state = [], action) => {

    switch (action.type) {

        case "TOGGLE_GOSTFILTER": {
            if (state.includes(action.gost)) {
                return state.filter(item => item !== action.gost)
            }
            return [...state, action.gost]
        }

        default: {
            return state
        }
    }


}

export default gostFilterReducer