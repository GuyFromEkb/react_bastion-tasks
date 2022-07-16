
const initialValue = [{ type: "металлоконструкция", id: "s2311a" }, { type: "лестницы", id: "ssF2a1a" }, { type: "ЖБИ", id: "ykLsad02" }]


const typeReducer = (state = initialValue, action) => {

    switch (action.type) {

        case "ADD_TYPE": {
            return [...state, action.typeProduct]
        }

        default: {
            return state
        }
    }


}

export default typeReducer