
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from "react-redux"

import { allType } from "../../../store/type/typeSelectors"
import { addType } from "../../../store/type/typeActions"

import Crumbs from '../../Crumbs/Crumbs'
import "./type.scss"

function Type() {

    const typeData = useSelector(allType)
    const dispatch = useDispatch()



    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    const onSubmit = (data) => {
        dispatch(addType(data))
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
                            disabled={!isValid}
                            type="submit"
                            className="btn  type__btn"
                        >Добавить
                        </button>
                    </form>

                </div>
            </div>
        )
    }

    const Items = () => {

        return typeData.map(({ id, type }) => {
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
            <Crumbs page={'type'} />
            <button onClick={() => dispatch(addType({ type: "металлоконструкция", id: "s2311a" }))} > test</button>
            <h3 className="title">Тип продуктов</h3>
            <div className="page-task__bg">
                <Form />

                <div className="type__wrap mt-5">
                    <Items />
                </div>

            </div>


        </div>
    )

}

// export { Form }
export default Type