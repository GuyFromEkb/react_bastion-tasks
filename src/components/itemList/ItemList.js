import { useSelector } from 'react-redux'
import { /* allProduct, */ viewProduct } from '../../store/porduct/productSelector'
import { allgostFilter, priceFilter, typeFilter } from '../../store/Filter/FilterSelector'

import './itemList.scss'
import Item from '../item/Item'




const ItemList = () => {



    const activeFilterData = useSelector(allgostFilter)
    const priceFilterData = useSelector(priceFilter)
    const typeFilterData = useSelector(typeFilter)

    // console.log(typeFilterData);

    const itemData = useSelector((state) => viewProduct(state, { gost: activeFilterData, minMax: priceFilterData, type: typeFilterData }))



    return (
        <div className="item-list">
            {
                itemData.map(item => {
                    return <Item key={item.id}  {...item} />
                })
            }
        </div>
    )
}

export default ItemList