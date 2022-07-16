import { useSelector, useDispatch } from 'react-redux'
import { allGost } from '../../store/gost/gostSelector'
import { allgostFilter } from '../../store/gostFilter/gostFilterSelector'
import { addgostFilter } from '../../store/gostFilter/gostFilterActions'


import './gostList.scss'
import GostItem from '../gostItem/GostItem'

const GostList = () => {

    const gostData = useSelector(allGost)
    const gostFilterData = useSelector(allgostFilter)
    const dispatch = useDispatch()


    const onActive = (e) => {
        dispatch(addgostFilter(e.target.innerText))
    }

    return (
        <div className="gost-list">
            {
                gostData.map(item => {
                    const active = gostFilterData.includes(item)
                    return <GostItem onClick={onActive} active={active} key={item} name={item} />
                })
            }

        </div>
    )
}

export default GostList