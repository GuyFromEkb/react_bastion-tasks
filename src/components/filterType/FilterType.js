import './filterType.scss'
import FilterAccordion from '../filterAccordion/FilterAccordion'

const FilterType = () => {

    return (
        <FilterAccordion title={'Тип продукта'} show={true} icon={true} >
            <h1>type</h1>
        </FilterAccordion>

    )
}

export default FilterType