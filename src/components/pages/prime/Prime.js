import "./Prime.scss"
import Crumbs from '../../crumbs/Crumbs'
import PrimeTop from "../../prime-top/PrimeTop"
import PrimeLeft from "../../prime-left/PrimeLeft"
import PrimeRight from "../../prime-right/PrimeRight"
import PrimeBot from "../../prime-bot/PrimeBot"

const Prime = () => {

    return (

        <div className="container">
            <Crumbs />
            <PrimeTop />
            <div className="prime__wrap">
                <PrimeLeft />
                <PrimeRight />
            </div>
            <PrimeBot />
        </div>
    )
}

export default Prime


