import { useSelector } from 'react-redux'
import { allProduct, viewProduct } from '../../store/porduct/productSelector'
import { allgostFilter } from '../../store/gostFilter/gostFilterSelector'

import './itemList.scss'
import Item from '../item/Item'




const ItemList = () => {


    // const itemData = useSelector(allProduct)
    const activeFilterData = useSelector(allgostFilter)
    // console.log(itemData);
    // console.log(activeFilterData);

    // const buff = useSelector((state) => viewProduct(state, activeFilterData))


    const itemData = useSelector((state) => viewProduct(state, activeFilterData))
    // console.log(buff);

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