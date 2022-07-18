const addgostFilter = (gost) => ({
    type: 'TOGGLE_GOSTFILTER',
    gost
})

const addPriceFilter = (minMax) => ({
    type: 'ADD_PRICE_FILTER',
    minMax
})


export { addgostFilter, addPriceFilter }