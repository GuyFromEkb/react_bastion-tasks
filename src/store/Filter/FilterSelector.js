const allgostFilter = (state) => state.filter.gost
const priceFilter = (state) => state.filter.price
const typeFilter = (state) => state.filter.typeFilter
const allFilter = (state) => [...state.filter.gost, ...state.filter.price, state.filter.typeFilter][0]

export { allgostFilter, priceFilter, typeFilter, allFilter }