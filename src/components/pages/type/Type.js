import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'

import "./type.scss"

function Type() {

    const [data, setData] = useState([])

    useEffect(() => {
        const dataObj = [{ type: "металлоконструкция", id: "s2311a" }, { type: "лестницы", id: "ssF2a1a" }, { type: "ЖБИ", id: "ykLsad02" }]
        setData(prevData => [...dataObj, ...prevData])
    }, [])

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    const onSubmit = (data) => {

        setData(prevData => [data, ...prevData])

        reset();
    }


    const Form = () => {
        return (
            <div className="card mt-4  col-5">

                <div className="alert alert-secondary" role="alert">
                    Форма для добавления типов продуктов
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                {...register('type', {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 4,
                                        message: "Минимум 4 символа"
                                    }
                                })}
                                placeholder="Тип продукта"
                            />
                            <div className="form-text">{errors?.type && <p>{errors.type.message}</p>}</div>
                        </div>

                        <div className="mb-3">
                            <input
                                className="form-control"
                                {...register('id', {
                                    required: "Поле обязательно к заполнению",
                                    minLength: {
                                        value: 3,
                                        message: "Минимальная длина id 3 символа"
                                    }
                                })}
                                placeholder="Id продукта"
                            />
                            <div className="form-text">{errors?.id && <p>{errors.id.message}</p>}</div>
                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Добавить
                        </button>
                    </form>

                </div>
            </div>
        )
    }

    const Items = () => {

        return data.map(({ id, type }) => {
            return (
                <div key={id} className="card col-12" >
                    <div className="card-header ">Тип: {type} </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ID: {id}</li>
                    </ul>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <h2>Тип продуктов</h2>

            <Form />

            <div className="type__wrap mt-5">
                <Items />
            </div>


        </div>
    )

}


export default Type