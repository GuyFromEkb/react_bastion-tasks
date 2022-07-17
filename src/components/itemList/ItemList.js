import { useSelector } from 'react-redux'
import { /* allProduct, */ viewProduct } from '../../store/porduct/productSelector'
import { allgostFilter } from '../../store/gostFilter/gostFilterSelector'

import './itemList.scss'
import Item from '../item/Item'




const ItemList = () => {


    // const itemData = useSelector(allProduct)

    const activeFilterData = useSelector(allgostFilter)

    const itemData = useSelector((state) => viewProduct(state, activeFilterData))


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