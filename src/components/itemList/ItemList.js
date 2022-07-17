import { useSelector } from 'react-redux'
import { allProduct } from '../../store/porduct/productSelector'

import './itemList.scss'
import Item from '../item/Item'




const ItemList = () => {

    const itemData = useSelector(allProduct)
    console.log(itemData);


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