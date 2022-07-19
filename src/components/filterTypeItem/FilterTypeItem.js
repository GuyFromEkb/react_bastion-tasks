import './filterTypeItem.scss'

const FilterTypeItem = ({ id, type, filter, isChecked }) => {
    return (

        <li key={id} className='filter-type__item' >
            <input
                checked={isChecked}
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