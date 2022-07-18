import CategoryItem from '../categoryItem/categoryItem'
import './category.scss'

const CategoryList = () => {

    const categoryData = [
        {
            title: 'Серия 5.904-1 выпуск 1:',
            descr: 'Детали крепления воздуховодов',
            counter: '95'
        },
        {
            title: 'Серия 4.903-10 Выпуск 4,5,6:',
            descr: 'Изделия и детали трубопроводов для тепловых сетей',
            counter: '15'
        },
        {
            title: 'Серия 4.900-9 Выпуск 1:',
            descr: 'Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации',
            counter: '247'
        },
        {
            title: 'Серия 3.900-9:',
            descr: 'Опорные конструкции и средства крепления трубопроводов',
            counter: '2'
        },
        {
            title: 'Л8-508.000 - Л8-524.000:',
            descr: 'Опоры и подвески трубопроводов Дн<89мм',
            counter: '15'
        },
        {
            title: 'Л8-138.000 - Л8-200.000:',
            descr: 'Опоры и подвески станционных трубопроводов',
            counter: '247'
        },
    ]

    return (

        <div className="category">
            <ul className="category-list">
                {categoryData.map((item,index) => <CategoryItem key={index} {...item} />)}
            </ul>
            <div className="category__more">
                <p>Показать все
                    <svg className="category__arrow" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#C93E33" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </p>


                {/* <div ></div> */}
            </div>
        </div>



    )

}

export default CategoryList