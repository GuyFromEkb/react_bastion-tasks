import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { allCartItem } from '../../store/cart/cartSelector'
import { removeAllItem } from '../../store/cart/cartActions'

import './cartForm.scss'
import iconOffer from '../../resources/img/offer-btn.png'

const CartForm = () => {

    //
    const [name, setName] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState("Поле не может быть пустым")
    //
    const [phone, setPhone] = useState('')
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [phoneError, setPhoneError] = useState("Поле не может быть пустым")
    //
    const [mail, setMail] = useState('')
    const [mailDirty, setMailDirty] = useState(false)
    const [mailError, setMailError] = useState("Поле не может быть пустым")
    //
    const [inn, setInn] = useState('')
    const [innDirty, setInnDirty] = useState(false)
    const [innError, setInnError] = useState("Поле не может быть пустым")
    //
    const formIsValid = [...nameError, ...phoneError, ...mailError, ...innError].length !== 0

    const dispatch = useDispatch();
    const cartData = useSelector(allCartItem)

    const finalCost = cartData.reduce((acc, { count, price }) => {
        acc += count * price
        return acc
    }, 0)

    const onChangeName = (e) => {
        setName(e.target.value)

        if (e.target.value.length === 0) {
            setNameError('Поле не может быть пустым')
            return
        }
        if (e.target.value.length < 5) {
            setNameError('Минимум 5 символов')
            return
        }
        else {
            setNameError('')
        }
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)

        const valid = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/

        if (e.target.value.length === 0) {
            setPhoneError('Поле не может быть пустым')
            return
        }
        if (!valid.test(e.target.value.toLowerCase())) {
            setPhoneError('Некорректный ввод')
            return
        }
        else {
            setPhoneError('')
        }
    }
    const onChangeMail = (e) => {
        setMail(e.target.value)

        const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (e.target.value.length === 0) {
            setMailError('Поле не может быть пустым')
            return
        }
        if (!valid.test(e.target.value.toLowerCase())) {
            setMailError('Некорректный ввод')
            return
        }
        else {
            setMailError('')
        }
    }
    const onChangeInn = (e) => {
        setInn(e.target.value)

        if (e.target.value.length === 0) {
            setInnError('Поле не может быть пустым')
            return
        }
        if (e.target.value.length < 5) {
            setInnError('Минимум 5 символов')
        }
        else {
            setInnError('')
        }
    }
    const blurHandler = (e) => {

        switch (e.target.name) {
            case 'name':
                {
                    setNameDirty(true)
                    return;
                }
            case 'phone':
                {
                    setPhoneDirty(true)
                    return;
                }
            case 'mail':
                {
                    setMailDirty(true)
                    return;
                }
            case 'inn':
                {
                    setInnDirty(true)
                    return;
                }


            default:
                return;
        }
    }
    const showConsolOrderInfo = (formDataObj, cartInfo, finalPrice) => {
        console.log("Имя:", formDataObj.name)
        console.log("телефон:", formDataObj.phone)
        console.log("email:", formDataObj.mail)
        console.log("Организация/ИНН:", formDataObj.inn)
        console.log("Cумма заказа:", Math.round(finalPrice * 10) / 10, "р.")
        console.log('==================================')
        console.log(`Заказ ${cartInfo.length} позиции:`)
        console.log('==================================')
        cartInfo.forEach((item, index) => {

            console.log("Позиция ", index + 1, ":")
            console.log("Id: ", item.id)
            console.log("Название: ", item.name)
            console.log("Количество: ", item.count, "по цене:", item.price, "р.", "за шт.")
            console.log('----------------------------------')
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const infoCustomer = Object.fromEntries(formData.entries())

        showConsolOrderInfo(infoCustomer, cartData, finalCost)

        e.target.reset()
        setName('')
        setPhone('')
        setMail('')
        setInn('')
        dispatch(removeAllItem)
    }
    return (
        <div className="cart-form">

            <div className="cart-form__title">
                Контактная информация
            </div>

            <form onSubmit={(e) => onSubmit(e)} className="cart-form__form">


                <div className="cart-form__form-wrap">


                    <div className="cart-form__section">
                        <svg className={`cart-form__icon ${nameError ? 'op-5' : null} `}
                            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6668 12.25V11.0833C11.6668 10.4645 11.421 9.871 10.9834 9.43342C10.5458 8.99583 9.95233 8.75 9.3335 8.75H4.66683C4.04799 8.75 3.4545 8.99583 3.01691 9.43342C2.57933 9.871 2.3335 10.4645 2.3335 11.0833V12.25" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input
                            value={name}
                            onChange={onChangeName}
                            name='name'
                            className="cart-form__input"
                            type="text"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='ФИО'

                        />

                        {(nameDirty && nameError) &&
                            <div className="cart-form__eror">{nameError}</div>
                        }

                    </div>

                    <div className="cart-form__section">
                        <svg className={`cart-form__icon ${phoneError ? 'op-5' : null} `}
                            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8333 9.86999V11.62C12.834 11.7824 12.8007 11.9433 12.7356 12.0921C12.6705 12.241 12.5751 12.3746 12.4554 12.4844C12.3357 12.5942 12.1943 12.6779 12.0404 12.7299C11.8865 12.7819 11.7235 12.8013 11.5617 12.7867C9.76666 12.5916 8.04242 11.9782 6.5275 10.9958C5.11807 10.1002 3.92311 8.90525 3.0275 7.49582C2.04166 5.97402 1.42814 4.2414 1.23667 2.43832C1.22209 2.27701 1.24126 2.11443 1.29296 1.96093C1.34466 1.80744 1.42775 1.66639 1.53695 1.54676C1.64615 1.42714 1.77905 1.33157 1.92721 1.26612C2.07537 1.20068 2.23553 1.1668 2.3975 1.16665H4.1475C4.4306 1.16387 4.70505 1.26411 4.9197 1.44871C5.13435 1.63331 5.27455 1.88966 5.31417 2.16999C5.38803 2.73002 5.52501 3.27991 5.7225 3.80915C5.80099 4.01794 5.81797 4.24485 5.77145 4.463C5.72492 4.68115 5.61684 4.88138 5.46 5.03999L4.71917 5.78082C5.54958 7.24122 6.75877 8.45041 8.21917 9.28082L8.96 8.53999C9.1186 8.38315 9.31884 8.27506 9.53699 8.22854C9.75514 8.18202 9.98205 8.199 10.1908 8.27749C10.7201 8.47497 11.27 8.61196 11.83 8.68582C12.1134 8.72579 12.3722 8.86852 12.5571 9.08686C12.7421 9.30519 12.8404 9.5839 12.8333 9.86999Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input
                            value={phone}
                            onChange={onChangePhone}
                            name='phone'
                            className="cart-form__input"
                            type="text"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Контактный телефон'

                        />

                        {(phoneDirty && phoneError) &&
                            <div className="cart-form__eror">{phoneError}</div>
                        }

                    </div>


                    <div className="cart-form__section">
                        <svg className={`cart-form__icon ${mailError ? 'op-5' : null} `}
                            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99984 9.33332C8.2885 9.33332 9.33317 8.28865 9.33317 6.99999C9.33317 5.71133 8.2885 4.66666 6.99984 4.66666C5.71117 4.66666 4.6665 5.71133 4.6665 6.99999C4.6665 8.28865 5.71117 9.33332 6.99984 9.33332Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33318 4.66666V7.58333C9.33318 8.04746 9.51755 8.49258 9.84574 8.82076C10.1739 9.14895 10.619 9.33333 11.0832 9.33333C11.5473 9.33333 11.9924 9.14895 12.3206 8.82076C12.6488 8.49258 12.8332 8.04746 12.8332 7.58333V6.99999C12.8331 5.68343 12.3876 4.40561 11.5693 3.3743C10.7509 2.343 9.60767 1.61888 8.32555 1.31967C7.04343 1.02046 5.6978 1.16377 4.50746 1.72629C3.31712 2.28881 2.35207 3.23747 1.76924 4.418C1.18641 5.59853 1.02007 6.94151 1.29727 8.22856C1.57447 9.51561 2.27891 10.671 3.29604 11.507C4.31318 12.3429 5.58318 12.8102 6.89955 12.8328C8.21592 12.8555 9.50124 12.4321 10.5465 11.6317" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <input
                            value={mail}
                            onChange={onChangeMail}
                            name='mail'
                            className="cart-form__input"
                            type="text"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Email'

                        />

                        {(mailDirty && mailError) &&
                            <div className="cart-form__eror">{mailError}</div>
                        }

                    </div>

                    <div className="cart-form__section">
                        <svg className={`cart-form__icon ${phoneError ? 'op-5' : null} `}
                            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M11.6665 4.08334H2.33317C1.68884 4.08334 1.1665 4.60568 1.1665 5.25001V11.0833C1.1665 11.7277 1.68884 12.25 2.33317 12.25H11.6665C12.3108 12.25 12.8332 11.7277 12.8332 11.0833V5.25001C12.8332 4.60568 12.3108 4.08334 11.6665 4.08334Z" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path opacity="0.5" d="M9.33317 12.25V2.91667C9.33317 2.60725 9.21025 2.3105 8.99146 2.09171C8.77267 1.87292 8.47592 1.75 8.1665 1.75H5.83317C5.52375 1.75 5.22701 1.87292 5.00821 2.09171C4.78942 2.3105 4.6665 2.60725 4.6665 2.91667V12.25" stroke="#C93E33" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <input
                            value={inn}
                            onChange={onChangeInn}
                            name='inn'
                            className="cart-form__input"
                            type="text"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Организация / ИНН'

                        />

                        {(innDirty && innError) &&
                            <div className="cart-form__eror">{innError}</div>
                        }

                    </div>



                </div>

                <div className="cart-form__price">
                    <p>Итого</p> <span>{finalCost.toLocaleString()} руб.</span>
                </div>

                <button disabled={formIsValid} className='cart-form__btn'> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.375 1.25C0.375 0.835786 0.710786 0.5 1.125 0.5H2.4375C2.78165 0.5 3.08164 0.734223 3.16511 1.0681L3.58558 2.75H16.5C16.731 2.75 16.949 2.8564 17.0912 3.03844C17.2333 3.22048 17.2836 3.45785 17.2276 3.6819L15.3526 11.1819C15.2691 11.5158 14.9692 11.75 14.625 11.75H4.875C4.53085 11.75 4.23086 11.5158 4.14739 11.1819L1.85192 2H1.125C0.710786 2 0.375 1.66421 0.375 1.25ZM3.96058 4.25L5.46058 10.25H14.0394L15.5394 4.25H3.96058Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.875 11.75C5.91053 11.75 6.75 12.5895 6.75 13.625C6.75 14.6605 5.91053 15.5 4.875 15.5C3.83947 15.5 3 14.6605 3 13.625C3 12.5895 3.83947 11.75 4.875 11.75ZM4.875 13.25C4.66789 13.25 4.5 13.4179 4.5 13.625C4.5 13.8321 4.66789 14 4.875 14C5.08211 14 5.25 13.8321 5.25 13.625C5.25 13.4179 5.08211 13.25 4.875 13.25Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.625 11.75C15.6605 11.75 16.5 12.5895 16.5 13.625C16.5 14.6605 15.6605 15.5 14.625 15.5C13.5895 15.5 12.75 14.6605 12.75 13.625C12.75 12.5895 13.5895 11.75 14.625 11.75ZM14.25 13.625C14.25 13.4179 14.4179 13.25 14.625 13.25C14.8321 13.25 15 13.4179 15 13.625C15 13.8321 14.8321 14 14.625 14C14.4179 14 14.25 13.8321 14.25 13.625Z" fill="white" />
                </svg>
                    <p>Оформить заказ</p>
                </button>
            </form>

            <button className='cart-form__offer-btn' >
                <img src={iconOffer} alt="icon" />
                <p>Коммерческое предложение</p>
            </button>




        </div>
    )
}

export default CartForm