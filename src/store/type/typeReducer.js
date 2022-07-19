
const initialValue = [{ type: "металлоконструкция", id: "metal" }, { type: "лестницы", id: "lestnica" }, { type: "ЖБИ", id: "jbi" }]


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