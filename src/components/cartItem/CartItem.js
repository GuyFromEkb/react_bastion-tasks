import { useDispatch } from 'react-redux'
import { removeCartItem, changeCountCartItem } from '../../store/cart/cartActions'

import img from '../../resources/img/item-img.png'
import { useState } from 'react'

import './cartItem.scss'


/* 
count: 1
gost: (2) ['ОСТ 36-146-88', 'MKR 122']
id: "122sd123sd"
name: "Опора тавровая хомутовая  ТХ"
price: 3222 
*/

const CartItem = ({ count, gost, id, name, price, show }) => {

    const dispatch = useDispatch()

    const [input, setInput] = useState(count)

    const onChangeInput = (e) => {

        if (e.target.value === "") {
            setInput(1)
            show(true)
            return
        }
        if (+e.target.value > 99) {
            setInput(99)
            show(true)
            return
        }
        setInput(+e.target.value)
        show(false)
    }
    const onChangeCount = (n) => {
        if (+input + n < 1) {
            show(true)
            return
        }
        if (+input + n > 99) {
            show(true)
            return
        }
        show(false)
        setInput(count => +count + n);
        onSetCountInDataCart(+count + n)
    }
    const onRemoveItem = () => {
        show(false)
        dispatch(removeCartItem(id))
    }

    const onSetCountInDataCart = (count) => {
        dispatch(changeCountCartItem(id, count))
    }




    return (
        <div className="cart-item">

            <div className="cart-item__left">
                <div className="cart-item__img">
                    <img src={img} alt="img" />
                </div>
                <div className="cart-item__info">
                    <div className="cart-item__gosts">
                        {gost && gost.map((item, index) => (<div key={index} className="item__gost">{item}</div>))}
                    </div>
                    <div className="cart-item__name"> {name}</div>
                    <div className="cart-item__price">{price} руб.</div>
                </div>
            </div>

            <div className="cart-item__counter">
                <div className="counter">
                    <div onClick={() => onChangeCount(+1)} className="counter__btn">+</div>
                    <input value={input} onBlur={() => onSetCountInDataCart(input)} onChange={(e) => onChangeInput(e)} className='counter__current cart-item__input' type="number" />
                    <div onClick={() => onChangeCount(-1)} className="counter__btn">-</div>
                </div>
            </div>
            <div className="cart-item__final-price">{price * input} руб.</div>

            <div
                onClick={onRemoveItem}
                className="cart-item__remove">

                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 4.5H3.75H15.75" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="#C93E33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </div>
    )
}

export default CartItem