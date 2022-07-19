import './filterTypeItem.scss'

const FilterTypeItem = ({ id, type, filter }) => {

    return (

        <li key={id} className='filter-type__item' >
            <input
                id={id}
                className="checkbox__input"
                type="checkbox"
                onChange={filter}
            />
            <label className='checkbox__label' htmlFor={id}>
                <span className="checkbox" />
                <span>{type}</span>
            </label>
        </li>
    )
}

export default FilterTypeItem