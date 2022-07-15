import { Link } from 'react-router-dom'
import "./noteFound.scss"

function NoteFound() {

    return (
        <div className="note-found">

            <div className="container">
                <h3>{'Страница не найдена :('}</h3>

                <Link to="/" > <div className='note-found__back' >Вернуться на главную</div></Link>
            </div>

        </div>
    )

}


export default NoteFound