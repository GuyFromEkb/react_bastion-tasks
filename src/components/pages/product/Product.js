import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from "react-redux"

import { allType } from "../../../store/type/typeSelectors"
import Crumbs from '../../Crumbs/Crumbs'
import "./product.scss"


function Product() {

    const typeData = useSelector(allType).map(item => item.type)
    const typeDataOption = typeData.map((item, index) => <option key={index} value={item}>{item}</option>)

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    // console.log(typeData);
    return (

        <div className="container">
            <Crumbs page={'product'} />
            <h3 className="title">Продукты</h3>

            <div className="card mt-4  col-5">
                <div className="alert alert-secondary" role="alert">
                    Форма для добавления продуктов
                </div>
                <div className="card-body">

                    <form >

                        <div className="mb-1">
                            <input
                                className="form-control"
                                placeholder="Название продукта"
                            />
                            <div className="form-text">SDAS</div>
                        </div>

                        <div className="mb-1">
                            <input
                                className="form-control"
                                placeholder="Id продукта"
                            />
                            <div className="form-text">SSAD</div>
                        </div>
                        <div className="mb-1">
                            <select className="form-select" >
                                <option >Выберите тип продукта</option>
                                {typeDataOption}
                            </select>
                            <div className="form-text">SSAD</div>
                        </div>
                        <div className="mb-1">
                            <input
                                className="form-control"
                                placeholder="Укажите цену"
                            />
                            <div className="form-text">SSAD</div>
                        </div>
                        <div className="mb-1">
                            <div className="form-label">Выберите ГОСТ продукта</div>{" "}

                            <div className="product__wrap-gost">

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">ГОСТ 14911-82</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">ОСТ 36-146-88</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">НТС 65-06</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">ОСТ 36-146-88</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">НТС 65-06</label>
                                </div>
                            </div>


                        </div>



                        <button
                            type="submit"
                            className="btn  type__btn"
                        >Добавить
                        </button>
                    </form>

                </div>
            </div>

        </div>

    )

}


export default Product