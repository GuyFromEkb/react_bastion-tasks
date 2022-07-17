const allProduct = (state) => state.product

const viewProduct = (state, filter = []) => {

    if (filter.length === 0) return state.product

    return state.product.filter(item => {

        const productGost = [...item.gost]

        /* const a =  */
        return filter.some(filterItem => productGost.includes(filterItem))

        // console.log(`filter = `, filter);
        // console.log(productGost, '==================', a);

    })

    // return state.product
}

export { allProduct, viewProduct }