import { Fragment } from "react";
import './Card.css'

function Card(props) {
    return(
        <Fragment>
            <div className='card-logo'>
                <p className='judul2-kontak'>{props.judul}</p>
                <img src={props.img} alt={props.alt} className='icon-kontak'/>
                <p className='text3-kontak'>{props.text}</p>
            </div>
        </Fragment>
    )
}

export default Card