const initialValue = ["ОСТ 36-146-88", "НТС 65-06", "ГОСТ 14911-82", "MKR 122"];

const gostReducer = (state = initialValue, action) => {

    switch (action.type) {

        case "ADD_GOST": {
            if (!action.gost) { return state }

            const buff = new Set([...state, ...action.gost])
            return [...buff]
        }

        default: {
            return state
        }
    }


}

export default gostReducer