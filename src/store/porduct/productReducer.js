
const initialValue = [
    {
        "name": "Опора тавровая хомутовая  ТХ",
        "id": "122sd123sd",
        "type": "металлоконструкция",
        "price": 3222,
        "hit": true,
        "action": true,
        "gost": ["ОСТ 36-146-88",'MKR 122']
    },
    {
        "name": " цельная приварная  КП",
        "id": "dsa2Lks1",
        "type": "металлоконструкция",
        "price": 220,
        "hit": false,
        "action": true,
        "gost": ["НТС 65-06", "ГОСТ 14911-82"]
    },
    {
        "name": "Шлюз ВНПП3",
        "id": "msjL29sa",
        "type": "лестницы",
        "price": 1308,
        "hit": false,
        "action": false,
        "gost": ["ОСТ 36-146-88", "НТС 65-06", "MKR 122"]
    }
];

const productReducer = (state = initialValue, action) => {

    switch (action.type) {

        case "ADD_PRODUCT": {
            return [...state, action.product]
        }

        default: {
            return state
        }
    }


}

export default productReducer