import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addCartItem } from '../../store/cart/cartActions'

import img from '../../resources/img/item-img.png'
import './item.scss'



const Item = ({ id, hit, action, gost, name, price }) => {



    const [count, setCount] = useState(1)

    const onChangeCount = (n) => {
        if (count + n < 1) { return }

        setCount(count => count + n);
    }

    const dispatch = useDispatch()
    const onAddToCart = (itemInfo) => {
        
        dispatch(addCartItem(itemInfo))
        setCount(1)
    }
    const selfInfo = {id,gost,name,price,count}



    return (
        <div className="item">
            <div className="item__top">
                <div className="item__actions">
                    {hit && (
                        <div className="item__hit">хит</div>
                    )}
                    {action && (
                        <div className="item__action">акция</div>
                    )}
                </div>


                <img className="item__img" src={img} alt={name} />

                {gost &&
                    <div className="item__gosts">{
                        gost.map((item, i) => {
                            return <div key={i} className="item__gost">{item}</div>
                        })
                    }
                    </div>
                }

            </div>

            <div className="item__name">{name}</div>
            <div className="item__price-wrap">
                <div className="item__price">{price}{" "}руб.</div>
                <div className="item__counter">
                    <div className="counter">
                        <button onClick={() => onChangeCount(1)} className="counter__btn">+</button>
                        <div className="counter__current">{count}</div>
                        <button onClick={() => onChangeCount(-1)} className="counter__btn">-</button>
                    </div>
                </div>

            </div>
            <div className="item__btns">
                <button onClick={() => { onAddToCart(selfInfo) }} className="item__cart">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.333374 1.00001C0.333374 0.63182 0.631851 0.333344 1.00004 0.333344H2.16671C2.47262 0.333344 2.73927 0.541542 2.81347 0.83832L3.18723 2.33334H14.6667C14.872 2.33334 15.0658 2.42792 15.1922 2.58974C15.3185 2.75155 15.3633 2.96254 15.3135 3.1617L13.6468 9.82837C13.5726 10.1251 13.306 10.3333 13 10.3333H4.33337C4.02746 10.3333 3.76081 10.1251 3.68661 9.82837L1.64619 1.66668H1.00004C0.631851 1.66668 0.333374 1.3682 0.333374 1.00001ZM4.33337 10.3333C3.4129 10.3333 2.66671 11.0795 2.66671 12C2.66671 12.9205 3.4129 13.6667 4.33337 13.6667C5.25385 13.6667 6.00004 12.9205 6.00004 12C6.00004 11.0795 5.25385 10.3333 4.33337 10.3333ZM13 10.3333C12.0796 10.3333 11.3334 11.0795 11.3334 12C11.3334 12.9205 12.0796 13.6667 13 13.6667C13.9205 13.6667 14.6667 12.9205 14.6667 12C14.6667 11.0795 13.9205 10.3333 13 10.3333ZM3.52056 3.66668L4.85389 9.00001H12.4795L13.8129 3.66668H3.52056ZM8.66671 4.33334C9.0349 4.33334 9.33337 4.63182 9.33337 5.00001V5.66668H10C10.3682 5.66668 10.6667 5.96515 10.6667 6.33334C10.6667 6.70153 10.3682 7.00001 10 7.00001H9.33337V7.66668C9.33337 8.03487 9.0349 8.33334 8.66671 8.33334C8.29852 8.33334 8.00004 8.03487 8.00004 7.66668V7.00001H7.33337C6.96518 7.00001 6.66671 6.70153 6.66671 6.33334C6.66671 5.96515 6.96518 5.66668 7.33337 5.66668H8.00004V5.00001C8.00004 4.63182 8.29852 4.33334 8.66671 4.33334ZM4.33337 11.6667C4.14928 11.6667 4.00004 11.8159 4.00004 12C4.00004 12.1841 4.14928 12.3333 4.33337 12.3333C4.51747 12.3333 4.66671 12.1841 4.66671 12C4.66671 11.8159 4.51747 11.6667 4.33337 11.6667ZM13 11.6667C12.8159 11.6667 12.6667 11.8159 12.6667 12C12.6667 12.1841 12.8159 12.3333 13 12.3333C13.1841 12.3333 13.3334 12.1841 13.3334 12C13.3334 11.8159 13.1841 11.6667 13 11.6667Z" fill="white" />
                    </svg>
                    В корзину
                </button>
                <button className="item__more">Подробнее</button>
            </div>

        </div>



    )
}

export default Item





// import img from '../../resources/img/item-img.png'
// import './item.scss'



// const Item = ({ id, hit, action, gost, name, price }) => {

//     return (
//         <div className="item">
//             <div className="item__actions">
//                 {hit && (

//                 )}
//                 <div className="item__hit">хит</div>
//                 <div className="item__action">акция</div>
//             </div>
//             <img className="item__img" src={img} alt="" />
//             <div className="item__gosts">
//                 <div className="item__gost">ГОСТ 14911-82</div>
//                 <div className="item__gost">ГОСТ AV-82</div>
//             </div>
//             <div className="item__name">Опора тавровая хомутовая ТХ</div>
//             <div className="item__price-wrap">
//                 <div className="item__price">849.9 руб. </div>
//                 <div className="item__counter">
//                     <div className="counter">
//                         <button className="counter__btn">+</button>
//                         <div className="counter__current">0</div>
//                         <button className="counter__btn">-</button>
//                     </div>
//                 </div>

//             </div>
//             <div className="item__btns">
//                 <button className="item__cart">
//                     <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M0.333374 1.00001C0.333374 0.63182 0.631851 0.333344 1.00004 0.333344H2.16671C2.47262 0.333344 2.73927 0.541542 2.81347 0.83832L3.18723 2.33334H14.6667C14.872 2.33334 15.0658 2.42792 15.1922 2.58974C15.3185 2.75155 15.3633 2.96254 15.3135 3.1617L13.6468 9.82837C13.5726 10.1251 13.306 10.3333 13 10.3333H4.33337C4.02746 10.3333 3.76081 10.1251 3.68661 9.82837L1.64619 1.66668H1.00004C0.631851 1.66668 0.333374 1.3682 0.333374 1.00001ZM4.33337 10.3333C3.4129 10.3333 2.66671 11.0795 2.66671 12C2.66671 12.9205 3.4129 13.6667 4.33337 13.6667C5.25385 13.6667 6.00004 12.9205 6.00004 12C6.00004 11.0795 5.25385 10.3333 4.33337 10.3333ZM13 10.3333C12.0796 10.3333 11.3334 11.0795 11.3334 12C11.3334 12.9205 12.0796 13.6667 13 13.6667C13.9205 13.6667 14.6667 12.9205 14.6667 12C14.6667 11.0795 13.9205 10.3333 13 10.3333ZM3.52056 3.66668L4.85389 9.00001H12.4795L13.8129 3.66668H3.52056ZM8.66671 4.33334C9.0349 4.33334 9.33337 4.63182 9.33337 5.00001V5.66668H10C10.3682 5.66668 10.6667 5.96515 10.6667 6.33334C10.6667 6.70153 10.3682 7.00001 10 7.00001H9.33337V7.66668C9.33337 8.03487 9.0349 8.33334 8.66671 8.33334C8.29852 8.33334 8.00004 8.03487 8.00004 7.66668V7.00001H7.33337C6.96518 7.00001 6.66671 6.70153 6.66671 6.33334C6.66671 5.96515 6.96518 5.66668 7.33337 5.66668H8.00004V5.00001C8.00004 4.63182 8.29852 4.33334 8.66671 4.33334ZM4.33337 11.6667C4.14928 11.6667 4.00004 11.8159 4.00004 12C4.00004 12.1841 4.14928 12.3333 4.33337 12.3333C4.51747 12.3333 4.66671 12.1841 4.66671 12C4.66671 11.8159 4.51747 11.6667 4.33337 11.6667ZM13 11.6667C12.8159 11.6667 12.6667 11.8159 12.6667 12C12.6667 12.1841 12.8159 12.3333 13 12.3333C13.1841 12.3333 13.3334 12.1841 13.3334 12C13.3334 11.8159 13.1841 11.6667 13 11.6667Z" fill="white" />
//                     </svg>
//                     В корзину
//                 </button>
//                 <button className="item__more">Подробнее</button>
//             </div>

//         </div>
//     )
// }

// export default Item