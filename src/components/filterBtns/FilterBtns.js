import { useSelector } from 'react-redux'
import { allFilter } from '../../store/Filter/FilterSelector'

import { useDispatch } from 'react-redux'
import { clearFilter } from '../../store/Filter/FilterActions'

import './filterBtns.scss'


const FilterBtns = () => {

    const dispatch = useDispatch()
    const resetFilter = () => dispatch(clearFilter)

    const checkboxData = [
        { id: 'choseBuyer', name: 'Выбор покупателей', isChecked: false, isDisabled: true },
        { id: 'bestPrice', name: 'Лучшая цена', isChecked: true, isDisabled: false },
    ]
    const checkboxItem = checkboxData.map(item => < FilterCheckBox key={item.id} {...item} />)

    const buttonDisabled = useSelector(allFilter).length === 0


    return (
        <>
            {checkboxItem}
            <div className="filterBtns__wrap">
                <button onClick={resetFilter} disabled={buttonDisabled} className='filterBtns__btn'>Сбросить фильтры</button>
            </div>

        </>
    )

}

export default FilterBtns


const FilterCheckBox = ({ isDisabled, isChecked, id, name }) => {

    return (
        <div className={`filterBtns__wrap ${isDisabled ? 'disabled' : null}`}>
            <input
                disabled={isDisabled}
                defaultChecked={isChecked}
                id={id}
                className="checkbox__input "
                type="checkbox"
            />
            <label className='checkbox__label ' htmlFor={id}>
                <span className="checkbox " />
                <span>{name}</span>
            </label>
        </div>
    )
}