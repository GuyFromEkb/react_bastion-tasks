import { useSelector, useDispatch } from 'react-redux'
import { allType } from '../../store/type/typeSelectors'

import { toggleTypeFilter } from '../../store/Filter/FilterActions'

import './filterTypeList.scss'
import FilterAccordion from '../filterAccordion/FilterAccordion'
import FilterTypeItem from '../filterTypeItem/FilterTypeItem'

const FilterTypeList = () => {

    const typeData = useSelector(allType)
    const dispatch = useDispatch()

    const onAddFilterType = (e) => {

        dispatch(toggleTypeFilter(e.target.id))
        // console.log(e.target.id);
        // console.log(e.target.checked)
    }

    return (
        <FilterAccordion title={'Тип продукта'} show={true} icon={true} >

            <ul className='filter-type__list' >

                {typeData.map(item =>
                    <FilterTypeItem key={item.id} {...item} filter={onAddFilterType} />)
                }

            </ul>
        </FilterAccordion>

    )
}

export default FilterTypeList