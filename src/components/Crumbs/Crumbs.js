import { Link } from 'react-router-dom'
import "./crumbs.scss"

function Crumbs({ page }) {

    // console.log(props.page);
    return (

       
            <div className="crumbs__wrap" >
                <Link to="/" ><p>Главная</p></Link> <div className="arrow" />
                <p>Интернет-магазин</p> <div className="arrow" />
                <p className="current" >{currentPage(page)}</p>
            </div>

   

    )

}

const currentPage = (page) => {
    switch (page) {

        case 'product':
            return 'Продукты'
        case 'type':
            return 'Тип продуктов'
        case 'cart':
            return 'Корзина'
        default:
            return 'Опоры трубопроводов'
    }
}

export default Crumbs