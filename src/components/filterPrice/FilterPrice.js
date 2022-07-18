import { useState } from 'react';
import { useSelector } from 'react-redux'
import { allProduct } from '../../store/porduct/productSelector'

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

    const [minPrice, setBeforePrice] = useState(min)
    const [MaxPrice, setAfterPrice] = useState(max)
    const [flagMinPrice, setFlagMinPrice] = useState(true)
    const [flagMaxPrice, setflagMaxPrice] = useState(true)



    // console.log(min, max);




    const onSetBeforePrice = (e) => {


        if (Array.isArray(e)) {
            setFlagMinPrice(false)
            setBeforePrice(e[0])
        }
        else {
            const value = e.target.value
            setFlagMinPrice(false)

            if (value === "") {
                setFlagMinPrice(true)
                setBeforePrice(min)
                return
            }

            setBeforePrice(value)
        }


    }

    const onSetAfterPrice = (e) => {

        // console.log(Array.isArray(e));

        if (Array.isArray(e)) {
            setflagMaxPrice(false)
            setAfterPrice(e[1])
        }
        else {
            const value = e.target.value
            setflagMaxPrice(false)

            if (value === "") {
                setflagMaxPrice(true)
                setAfterPrice(max)
                return
            }
            setAfterPrice(value)
        }


    }

    const onUseSlider = (e) => {
        console.log(minPrice,MaxPrice);
        if (e[0] > minPrice || e[0] < minPrice) {
            onSetBeforePrice(e)
            // console.log('min');

        }
        else if (e[1] > MaxPrice || e[1] < MaxPrice) {
            // console.log('max', flagMaxPrice);
            onSetAfterPrice(e)
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
                    <input value={flagMinPrice ? "" : minPrice} onChange={onSetBeforePrice} className='price-input__input' placeholder={minPrice} id='beforePrice' type="text" />
                </div>

                <div className="price-input__wrap">
                    <label className='price-input__label' htmlFor="afterPrice">до</label>
                    <input value={flagMaxPrice ? "" : MaxPrice} onChange={onSetAfterPrice} className='price-input__input' placeholder={MaxPrice} id='afterPrice' type="text" />
                </div>

            </div>

            <Slider className='custom-slider'
                onChange={onUseSlider}
                range={true}
                min={min}
                max={max}
                value={(flagMinPrice && flagMaxPrice) ? [MaxPrice / 4, MaxPrice] : [minPrice, MaxPrice]}
            />

            {dots}

        </div>

    )
}

export default FilterPrice