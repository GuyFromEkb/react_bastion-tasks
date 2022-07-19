import "./Prime.scss"
import Crumbs from '../../Crumbs/Crumbs'
import GostList from "../../gostList/GostList"
import ItemList from "../../itemList/ItemList"
import SideBarTitle from "../../sideBarTitle/SideBarTitle"
import Category from "../../category/Category"
import FilterPrice from "../../filterPrice/FilterPrice"
import FilterTypeList from "../../filterTypeList/FilterTypeList"
// import FilterTypeList from "../../filterTypeList/FilterTypeList"

function Prime() {




    return (

        <div className="container">
            <Crumbs />
            <Top />
            <div className="prime__wrap">
                <div className="prime__left">
                    <SideBarTitle name={'Категории'} icon={'category'} isShow={true} >
                        <Category />
                    </SideBarTitle>
                    <SideBarTitle name={'Фильтры'} icon={'filter'}>
                        <FilterPrice />
                        <FilterTypeList/>
                    </SideBarTitle>

                </div>
                <div className="prime__right">
                    <GostList />
                    <ItemList />
                </div>
            </div>


        </div>

    )

}

const Top = () => {
    return (
        <div className="top">
            <div className="top__left">
                <div className="top__back">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.60381 1.08754C4.83162 1.31534 4.83162 1.68469 4.60381 1.9125L2.09965 4.41669H11.1914C11.5135 4.41669 11.7747 4.67785 11.7747 5.00002C11.7747 5.32219 11.5135 5.58335 11.1914 5.58335H2.09965L4.60381 8.08754C4.83162 8.31535 4.83162 8.6847 4.60381 8.9125C4.376 9.14031 4.00666 9.14031 3.77885 8.9125L0.278885 5.4125C0.0510814 5.18469 0.0510814 4.81535 0.278885 4.58754L3.77885 1.08754C4.00666 0.859736 4.376 0.859735 4.60381 1.08754Z" fill="#C93E33" />
                    </svg>
                </div>
                <h3 className="title">Опоры трубопроводов</h3>
            </div>

            <div className="top__right">
                <div className="top__filter">
                    <p>сначало популярные</p>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.333374 0.833354C0.333374 0.465164 0.631851 0.166687 1.00004 0.166687H8.66671C9.0349 0.166687 9.33337 0.465164 9.33337 0.833354C9.33337 1.20154 9.0349 1.50002 8.66671 1.50002H1.00004C0.631851 1.50002 0.333374 1.20154 0.333374 0.833354ZM11 0.166687C11.3682 0.166687 11.6667 0.465164 11.6667 0.833354V7.69785L12.4939 6.73283C12.7335 6.45328 13.1544 6.4209 13.4339 6.66052C13.7135 6.90013 13.7458 7.321 13.5062 7.60055L11.5062 9.93388C11.3247 10.1457 11.0304 10.2221 10.7687 10.1253C10.5071 10.0285 10.3334 9.779 10.3334 9.50002V0.833354C10.3334 0.465164 10.6319 0.166687 11 0.166687ZM0.333374 5.16669C0.333374 4.7985 0.631851 4.50002 1.00004 4.50002H8.66671C9.0349 4.50002 9.33337 4.7985 9.33337 5.16669C9.33337 5.53488 9.0349 5.83335 8.66671 5.83335H1.00004C0.631851 5.83335 0.333374 5.53488 0.333374 5.16669ZM0.333374 9.50002C0.333374 9.13183 0.631851 8.83335 1.00004 8.83335H8.66671C9.0349 8.83335 9.33337 9.13183 9.33337 9.50002C9.33337 9.86821 9.0349 10.1667 8.66671 10.1667H1.00004C0.631851 10.1667 0.333374 9.86821 0.333374 9.50002Z" fill="black" />
                    </svg>
                </div>
                <div className="top__filter">
                    <div className="top__red-btn">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H3.5C4.05229 0 4.5 0.447715 4.5 1V3.5C4.5 4.05229 4.05229 4.5 3.5 4.5H1C0.447715 4.5 0 4.05229 0 3.5V1ZM3.5 1H1V3.5H3.5V1ZM5.5 1C5.5 0.447715 5.94772 0 6.5 0H9C9.55229 0 10 0.447715 10 1V3.5C10 4.05229 9.55229 4.5 9 4.5H6.5C5.94772 4.5 5.5 4.05229 5.5 3.5V1ZM9 1H6.5V3.5H9V1ZM0 6.5C0 5.94772 0.447715 5.5 1 5.5H3.5C4.05229 5.5 4.5 5.94772 4.5 6.5V9C4.5 9.55229 4.05229 10 3.5 10H1C0.447715 10 0 9.55229 0 9V6.5ZM3.5 6.5H1V9H3.5V6.5ZM5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5H9C9.55229 5.5 10 5.94772 10 6.5V9C10 9.55229 9.55229 10 9 10H6.5C5.94772 10 5.5 9.55229 5.5 9V6.5ZM9 6.5H6.5V9H9V6.5Z" fill="white" />
                        </svg>
                    </div>
                    <div className="top__white-btn">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.99998C0.44772 3.99998 0 4.44768 0 4.99998C0 5.55228 0.44772 5.99998 1 5.99998C1.55228 5.99998 2 5.55228 2 4.99998C2 4.44768 1.55228 3.99998 1 3.99998Z" fill="#C93E33" />
                            <path d="M0 8.49998C0 7.94768 0.44772 7.49998 1 7.49998C1.55228 7.49998 2 7.94768 2 8.49998C2 9.05228 1.55228 9.49998 1 9.49998C0.44772 9.49998 0 9.05228 0 8.49998Z" fill="#C93E33" />
                            <path d="M4 4.49998C3.72386 4.49998 3.5 4.72384 3.5 4.99998C3.5 5.27612 3.72386 5.49998 4 5.49998H10C10.2761 5.49998 10.5 5.27612 10.5 4.99998C10.5 4.72384 10.2761 4.49998 10 4.49998H4Z" fill="#C93E33" />
                            <path d="M3.5 8.49998C3.5 8.22384 3.72386 7.99998 4 7.99998H10C10.2761 7.99998 10.5 8.22384 10.5 8.49998C10.5 8.77612 10.2761 8.99998 10 8.99998H4C3.72386 8.99998 3.5 8.77612 3.5 8.49998Z" fill="#C93E33" />
                            <path d="M4 0.999983C3.72386 0.999983 3.5 1.22384 3.5 1.49998C3.5 1.77612 3.72386 1.99998 4 1.99998H10C10.2761 1.99998 10.5 1.77612 10.5 1.49998C10.5 1.22384 10.2761 0.999983 10 0.999983H4Z" fill="#C93E33" />
                            <path d="M1 0.571411C0.44772 0.571411 0 1.01911 0 1.57141C0 2.12371 0.44772 2.57141 1 2.57141C1.55228 2.57141 2 2.12371 2 1.57141C2 1.01911 1.55228 0.571411 1 0.571411Z" fill="#C93E33" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prime


