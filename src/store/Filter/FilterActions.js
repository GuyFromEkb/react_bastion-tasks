const addgostFilter = (gost) => ({
    type: 'TOGGLE_GOSTFILTER',
    gost
})

const addPriceFilter = (minMax) => ({
    type: 'ADD_PRICE_FILTER',
    minMax
})

const toggleTypeFilter = (typeFilterId) => ({
    type: 'TOGGLE_TYPE_FILTER',
    typeFilter:typeFilterId
})


export { addgostFilter, addPriceFilter, toggleTypeFilter }