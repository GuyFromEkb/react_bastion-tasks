import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from "react-redux"
import { useRef, useState } from 'react'

import { allType } from "../../../store/type/typeSelectors"
import {addProduct} from '../../../store/porduct/productActions'


import Crumbs from '../../Crumbs/Crumbs'
import "./product.scss"


function Product() {
    //Получение Типов продукта
    const typeData = useSelector(allType).map(item => item.type)
    const typeDataOption = typeData.map((item, index) => <option key={index} value={item}>{item}</option>)

    //Redux
    const dispatch = useDispatch()

    //Форма
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    //Гост
    const refGost = useRef();
    const [inputGost, setInputGost] = useState([])
    const [inputGostError, setinputGostError] = useState(null)
    const onAddGost = () => {

        const flag = refGost.current.value.length < 3 ?
            "Гост не может быть короче 3ех символов " : refGost.current.value.search(/[!@#$%^&*]/) > -1 ? "Гост не может содержать спец-символлы" : null

        if (!flag) {
            setinputGostError(flag)
            setInputGost(input => {
                const buff = [...input, refGost.current.value]
                refGost.current.value = ""
                return buff
            })
            return
        }

        setinputGostError(flag)
        refGost.current.focus()

    }

    //сабмит
    const onSubmit = (data) => {

        data.name.toLowerCase().includes("о") ? (data.hit = true) : (data.hit = false)
        data.name.toLowerCase().includes("а") ? (data.action = true) : (data.action = false)
        data.gost = inputGost.length !== 0 ? inputGost.toString().split(',') : null

        // console.log(data);

        
        dispatch(addProduct(data))      //!!!
        
        
        setInputGost([])
        reset();
    }

    const Form = () => {
        return (
            <div className="card mt-4  col-5">
                <div className="alert alert-secondary" role="alert">
                    Форма для добавления продуктов
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-2">
                            <input
                                className="form-control"
                                placeholder="Название продукта"
                                {...register('name', {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 4,
                                        message: "Минимум 4 символа"
                                    }
                                })}
                            />
                            <div className="form-text">{errors?.name && <p>{errors.name.message}</p>}</div>
                        </div>

                        <div className="mb-2">
                            <input
                                className="form-control"
                                placeholder="Id продукта"
                                {...register('id', {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 3,
                                        message: "Минимальная длина id 3 символа"
                                    }
                                })}
                            />
                            <div className="form-text">{errors?.id && <p>{errors.id.message}</p>}</div>
                        </div>
                        <div className="mb-2">
                            <select className="form-select"
                                {...register('type', {
                                    required: "Поле обязательно к заполнению",
                                    validate: type => type !== "Выберите тип продукта"

                                })}
                            >
                                <option >Выберите тип продукта</option>
                                {typeDataOption}
                            </select>

                        </div>
                        <div className="mb-2">
                            <input
                                className="form-control"
                                placeholder="Укажите цену"
                                type="number"
                                {...register('price', {
                                    required: "Поле обязательно к заполнению",
                                    min: {
                                        value: 1,
                                        message: 'Цена не может быть ниже 1'
                                    },
                                    valueAsNumber: true
                                })}
                            />
                            <div className="form-text">{errors?.price && <p>{errors.price.message}</p>}</div>
                        </div>
                        <div className="mb-3">
                            <input className="form-control mb-2" type="text" value={inputGost.length === 0 ? "Введите ГОСТ,если он присутсвует" : inputGost} disabled readOnly

                            />
                            <div className="input-group mb-1">
                                <input ref={refGost} type="text" className="form-control" placeholder="несколько - через запятую"
                                />
                                <button onClick={onAddGost} className="btn btn-outline-secondary" type="button" id="button-addon2">Добавить ГОСТ</button>

                            </div>
                            <div className="form-text">{inputGostError}</div>

                        </div>

                        {/* value={inputGost.length === 0 ? "Введите ГОСТ,если он присутсвует" : inputGost} */}

                        <button
                            disabled={!isValid}
                            type="submit"
                            className="btn  type__btn"
                        >Добавить
                        </button>
                    </form>

                </div>
            </div >
        )
    }

    return (
        <div className="container">
            <Crumbs page={'product'} />
            <h3 className="title">Продукты</h3>
            <div className="page-task__bg">
                <Form />
            </div>
        </div >
    )

}

export default Product