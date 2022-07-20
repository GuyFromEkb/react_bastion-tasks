import SideBarTitle from "../sideBarTitle/SideBarTitle"
import Category from "../category/Category"
import FilterPrice from "../filterPrice/FilterPrice"
import FilterTypeList from "../filterTypeList/FilterTypeList"
import FilterAccordion from "../filterAccordion/FilterAccordion"
import FilterBtns from "../filterBtns/FilterBtns"
import './primeleft.scss'

const PrimeLeft = () => {

    return (
        <div className="prime__left">
            <SideBarTitle name={'Категории'} icon={'category'} isShow={true} >
                <Category />
            </SideBarTitle>
            <SideBarTitle name={'Фильтры'} icon={'filter'}>
                <FilterPrice />
                <FilterTypeList />
                <FilterAccordion title={'Бренд'} show={false} icon={true} >
                    <p className="mb-3 lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod maxime recusandae adipisci ipsum qui corporis.</p>
                </FilterAccordion>
                <FilterBtns />
            </SideBarTitle>

        </div>
    )

}

export default PrimeLeft