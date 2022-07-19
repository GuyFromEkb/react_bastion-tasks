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
    typeFilter: typeFilterId
})

const clearFilter = {
    type: 'CLEAR_ALL_FILTER',
}


export { addgostFilter, addPriceFilter, toggleTypeFilter, clearFilter }