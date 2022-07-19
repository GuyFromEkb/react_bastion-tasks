import { useSelector, useDispatch } from 'react-redux'
import { allType } from '../../store/type/typeSelectors'
import { typeFilter } from '../../store/Filter/FilterSelector'

import { toggleTypeFilter } from '../../store/Filter/FilterActions'

import './filterTypeList.scss'
import FilterAccordion from '../filterAccordion/FilterAccordion'
import FilterTypeItem from '../filterTypeItem/FilterTypeItem'

const FilterTypeList = () => {

    const typeData = useSelector(allType)
    const filterTypeData = useSelector(typeFilter)
    const dispatch = useDispatch()

    const onAddFilterType = (e) => {
        dispatch(toggleTypeFilter(e.target.id))
    }
    return (
        <FilterAccordion title={'Тип продукта'} show={true} icon={true} >

            <ul className='filter-type__list' >
                {typeData.map(item => {
                    const isChek = filterTypeData.includes(item.id)

                    return (<FilterTypeItem key={item.id} isChecked={isChek}  {...item} filter={onAddFilterType} />)
                })}
            </ul>

        </FilterAccordion>

    )
}

export default FilterTypeList