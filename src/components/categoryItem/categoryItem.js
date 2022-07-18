import './categoryItem.scss'

const CategoryItem = ({ title, descr, counter }) => {

    return (
        <li className="category-item">
            <div className="category-item__title">{title}</div>
            <div className="category-item__descr">{descr}
                <div className="category-item__counter">{counter}</div>
            </div>
        </li>
    )
}

export default CategoryItem