import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { allProduct } from '../../store/porduct/productSelector'
import { addPriceFilter } from '../../store/Filter/FilterActions';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './filterPrice.scss'

const FilterPrice = () => {



    const itemData = useSelector(allProduct)
    const minMax = itemData.reduce((acc, item) => {
        acc[0] = acc[0] ? (item.price < acc[0] ? item.price : acc[0]) : item.price
        acc[1] = acc[1] ? (item.price > acc[1] ? item.price : acc[1]) : item.price
        return acc;
    }, [])
    const [min, max] = minMax

    const [buffMinInput, setBuffMinInput] = useState(undefined)
    const [buffMaxInput, setBuffMaxInput] = useState(undefined)
    const [minPrice, setBeforePrice] = useState(min)
    const [MaxPrice, setAfterPrice] = useState(max)
    const [valid, setValid] = useState(false)
    const [flagMinPrice, setFlagMinPrice] = useState(true)
    const [flagMaxPrice, setflagMaxPrice] = useState(true)
    const [sliderSubmitData, setSliderSubmitData] = useState(false)


    const dispatch = useDispatch()

    const onAddPriceFilter = () => {
        dispatch(addPriceFilter([+minPrice, +MaxPrice]))
    }

    useEffect(() => {
        onAddPriceFilter()
        // eslint-disable-next-line
    }, [sliderSubmitData])

    const onSetInputWithValidation = (e, version) => {
        const target = e.target.value

        if (version === 'minInput') {

            if (target === "") {
                setFlagMinPrice(true)
                setBeforePrice(min)
            }
            else if (target < min) {
                setValid('Число не может быть ниже, минимальной цены')
                setFlagMinPrice(true)
                setBeforePrice(min)
            }
            else if (target > max) {
                setValid('Число не может быть выше, максимальной цены')
                setFlagMinPrice(true)
                setBeforePrice(min)
            }
            else {
                setValid(false)
                setBeforePrice(target)
            }
        }

        if (version === 'maxInput') {

            if (target === "") {
                setflagMaxPrice(true)
                setAfterPrice(max)
            }
            else if (target < min) {
                setValid('Число не может быть ниже, минимальной цены')
                setflagMaxPrice(true)
                setAfterPrice(max)
            }
            else if (target > max) {
                setValid('Число не может быть выше, максимальной цены')
                setflagMaxPrice(true)
                setAfterPrice(max)
            }
            else {
                setValid(false)
                setAfterPrice(target)
            }
        }
        setBuffMinInput(undefined)
        setBuffMaxInput(undefined)
        setSliderSubmitData(state => !state)

    }

    const onChangeMinInput = (e) => {
        setFlagMinPrice(false)
        setBuffMinInput(e.target.value)
    }
    const onChangeMaxInput = (e) => {
        setflagMaxPrice(false)
        setBuffMaxInput(e.target.value)
    }

    const onSetSlider = (e, version) => {
        if (version === 'minInput') {
            setFlagMinPrice(false)
            setBeforePrice(e[0])
        }
        if (version === 'maxInput') {
            setflagMaxPrice(false)
            setAfterPrice(e[1])
        }
    }


    const useSlider = (e) => {

        if (e[0] > minPrice || e[0] < minPrice) {

            onSetSlider(e, 'minInput')
        }
        else if (e[1] > MaxPrice || e[1] < MaxPrice) {
            onSetSlider(e, 'maxInput')

        }
    }



    const title =
        <div className="filter-price__title">
            <div className="filter-title">Цена, руб.</div>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1.25L4 4.75L7.5 1.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

    const dots =
        <ul className="filter-price__dots">
            <li className="filter-price__dot"></li>
            <li className="filter-price__dot lng"></li>
            <li className="filter-price__dot"></li>
            <li className="filter-price__dot lng"></li>
            <li className="filter-price__dot"></li>
            <li className="filter-price__dot lng"></li>
            <li className="filter-price__dot"></li>
        </ul>


    return (
        <div className="filter-price">

            {title}

            <div className="price-input">
                <div className="price-input__wrap">
                    <label className='price-input__label' htmlFor="beforePrice">от</label>
                    <input type='number' value={flagMinPrice ? "" : buffMinInput === undefined ? minPrice : buffMinInput} onChange={onChangeMinInput} onBlur={(e) => onSetInputWithValidation(e, 'minInput')} className='price-input__input' placeholder={minPrice} id='beforePrice' />
                </div>
                <div className="price-input__wrap">
                    <label className='price-input__label' htmlFor="afterPrice">до</label>
                    <input type='number' value={flagMaxPrice ? "" : buffMaxInput === undefined ? MaxPrice : buffMaxInput} onChange={onChangeMaxInput} onBlur={(e) => onSetInputWithValidation(e, 'maxInput')} className='price-input__input' placeholder={MaxPrice} id='afterPrice' />
                </div>

            </div>
            {valid && <p className='price-input__validation' >{valid}</p>}

            <Slider className='custom-slider'
                onAfterChange={() => { setSliderSubmitData(state => !state) }}
                onChange={useSlider}
                range={true}
                min={min}
                max={max}

                value={[minPrice, MaxPrice]}
            />

            {dots}

        </div>

    )
}

export default FilterPrice