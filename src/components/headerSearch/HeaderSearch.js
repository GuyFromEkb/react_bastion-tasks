import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { allCartItem } from "../../store/cart/cartSelector"

import "./headerSearch.scss"
import logo from '../../resources/img/logo.png'
import star from '../../resources/img/star.png'
import cart from '../../resources/img/cart.png'

function HeaderSearch() {


    const cartDataCount = useSelector(allCartItem).length

    return (
        <div className="search">

            <div className="container">
                <div className="search__wrap">

                    <Link to={"/"}> <img className="search__logo" src={logo} alt="" /></Link>

                    <p className="search__slogan">Производитель металлических изделий №1</p>
                    <button className="search__btn">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.666748 2.33335C0.666748 1.41288 1.41294 0.666687 2.33342 0.666687H6.50008C7.42056 0.666687 8.16675 1.41288 8.16675 2.33335V6.50002C8.16675 7.4205 7.42056 8.16669 6.50008 8.16669H2.33342C1.41294 8.16669 0.666748 7.4205 0.666748 6.50002V2.33335ZM6.50008 2.33335H2.33342V6.50002H6.50008V2.33335ZM9.83342 2.33335C9.83342 1.41288 10.5796 0.666687 11.5001 0.666687H15.6668C16.5872 0.666687 17.3334 1.41288 17.3334 2.33335V6.50002C17.3334 7.4205 16.5872 8.16669 15.6668 8.16669H11.5001C10.5796 8.16669 9.83342 7.4205 9.83342 6.50002V2.33335ZM15.6668 2.33335H11.5001V6.50002H15.6668V2.33335ZM0.666748 11.5C0.666748 10.5795 1.41294 9.83335 2.33342 9.83335H6.50008C7.42056 9.83335 8.16675 10.5795 8.16675 11.5V15.6667C8.16675 16.5872 7.42056 17.3334 6.50008 17.3334H2.33342C1.41294 17.3334 0.666748 16.5872 0.666748 15.6667V11.5ZM6.50008 11.5H2.33342V15.6667H6.50008V11.5ZM9.83342 11.5C9.83342 10.5795 10.5796 9.83335 11.5001 9.83335H15.6668C16.5872 9.83335 17.3334 10.5795 17.3334 11.5V15.6667C17.3334 16.5872 16.5872 17.3334 15.6668 17.3334H11.5001C10.5796 17.3334 9.83342 16.5872 9.83342 15.6667V11.5ZM15.6668 11.5H11.5001V15.6667H15.6668V11.5Z" fill="white" />
                        </svg>

                        Каталог
                    </button>

                    <input className="search__input" placeholder="Поиск по названию..." type="text" />


                    <div className="search__cart">

                        <div className="search__cart-item">
                            <img src={star} alt="star" />
                            <p>Избранное</p>
                        </div>

                        <Link to={"/cart"} >
                            <div className="search__cart-item link">
                                {cartDataCount > 0 ? <div className="search__cart-counter">{cartDataCount}</div> : null}

                                <img src={cart} alt="cart" />
                                <p>Корзина</p>
                            </div>
                        </Link>

                    </div>


                </div>
            </div>

        </div>


    )

}


export default HeaderSearch