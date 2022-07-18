const initialValue = {
    gost: [],
    price: []

}

const FilterReducer = (state = initialValue, action) => {

    switch (action.type) {

        case "TOGGLE_GOSTFILTER": {

            if (state.gost.includes(action.gost)) {
                const buffGostArr = state.gost.filter(item => item !== action.gost)
                return { ...state, gost: buffGostArr }
            }

            const buffGostArr = [...state.gost, action.gost]

            return { ...state, gost: buffGostArr }
        }

        case "ADD_PRICE_FILTER": {

            return { ...state, price: action.minMax }
        }

        default: {
            return state
        }
    }


}

export default FilterReducer

            // console.log(state.gost , action.gost);

            // if (state.gost.includes(action.gost)) {
            //     return state.gost.filter(item => item !== action.gost)
            // }


            // console.log({ ...state, gost: action.gost });
            // console.log( state, ...state.gost, action.gost);
            // return [...state, ...state.gost, action.gost]

            // if (state.includes(action.gost)) {
            //     return state.filter(item => item !== action.gost)
            // }
            // return [...state, action.gost]