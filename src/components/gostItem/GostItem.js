import "./gostItem.scss"

const GostItem = ({ name, onClick, active }) => {

    const clazz = active ? 'on-active' : null

    return (
        <div onClick={onClick} className={`gost__item ${clazz}`}>{name}</div>
    )
}

export default GostItem
