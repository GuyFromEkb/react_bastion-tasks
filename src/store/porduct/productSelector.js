const allProduct = (state) => state.product

const viewProduct = (state, filter = {}) => {

    const { gost, minMax } = filter
    const [min, max] = minMax

    let tstGost = [];
    let tstminMax = []

    state.product.forEach(item => {

        //filter Gost
        const productGost = [...item.gost]

        const filterGost = gost.some(filterItem => {

            return productGost.includes(filterItem)
        })

        if (filterGost) tstGost.push(item)

             //filter Price
        const productPrice = item.price
        const filterPrice = productPrice >= min && productPrice <= max

        if (filterPrice) tstminMax.push(item)

    })

    if (gost.length === 0 && minMax.length === 0) { return state.product }
    if (gost.length === 0 && minMax.length !== 0) { return tstminMax }
    if (gost.length !== 0 && minMax.length === 0) { return tstGost }
    if (gost.length !== 0 && minMax.length !== 0) {
        const leastArr = tstGost.length < tstminMax.length ? tstGost : tstminMax;
        const biggestArr = tstGost.length >= tstminMax.length ? tstGost : tstminMax;
        const resultArray = leastArr.filter(item => {
            return biggestArr.some(item2 => item2.id === item.id)
        });

        return resultArray;
    }


}

export { allProduct, viewProduct }


// if (gost.length === 0) return state.product


// return state.product.filter(item => {

//     const productGost = [...item.gost]

//     const filterGost = gost.some(filterItem => {

//         return productGost.includes(filterItem)
//     })

//     return filterGost

//     // const productPrice = item.price
//     // const [min, max] = filter.minMax


//     // // console.log(min, max);
//     // const filterPrice = productPrice >= min && productPrice <= max




//     // return filterGost && filterPrice



// })

