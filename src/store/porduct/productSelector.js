const allProduct = (state) => state.product

const viewProduct = (state, filter = {}) => {

    const { gost, minMax, type } = filter
    const [min, max] = minMax

    return state.product.filter(item => {

        //filter Gost
        if (gost.length > 0) {
            const productGost = [...item.gost]
            const filterGost = gost.some(filterItem => {

                return productGost.includes(filterItem)
            })

            if (!filterGost)
                return false
        }
        //filter Price
        if (minMax.length > 0) {
            const productPrice = item.price
            const filterPrice = productPrice >= min && productPrice <= max

            if (!filterPrice)
                return false
        }
        //filter Type
        if (type.length > 0) {
            const productType = item.type
            const filterType = type.includes(productType)

            if (!filterType)
                return false
        }

        return true
    })
}

export { allProduct, viewProduct }






// const allProduct = (state) => state.product

// const viewProduct = (state, filter = {}) => {

//     const { gost, minMax, type } = filter
//     const [min, max] = minMax

//     let arrGost = []
//     let arrMinMax = []
//     let arrType = []

//     // console.log(type);

//     state.product.forEach(item => {

//         //filter Gost
//         {
//             const productGost = [...item.gost]

//             const filterGost = gost.some(filterItem => {

//                 return productGost.includes(filterItem)
//             })

//             if (filterGost) arrGost.push(item)
//         }

//         //filter Price
//         {
//             const productPrice = item.price
//             const filterPrice = productPrice >= min && productPrice <= max

//             if (filterPrice) arrMinMax.push(item)
//         }

//         //filter Type
//         const productType = item.type

//         const filterType = type.includes(productType)

//         if (filterType) arrType.push(item)

//     })

//     console.log(arrType);

//     if (gost.length === 0 && minMax.length === 0) { return state.product }
//     if (gost.length === 0 && minMax.length !== 0)  { return arrMinMax }
//     if (gost.length !== 0 && minMax.length === 0) { return arrGost }
//     if (gost.length !== 0 && minMax.length !== 0) {
//         const leastArr = arrGost.length < arrMinMax.length ? arrGost : arrMinMax;
//         const biggestArr = arrGost.length >= arrMinMax.length ? arrGost : arrMinMax;
//         const resultArray = leastArr.filter(item => {
//             return biggestArr.some(item2 => item2.id === item.id)
//         });

//         return resultArray;
//     }


// }

// export { allProduct, viewProduct }







































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



