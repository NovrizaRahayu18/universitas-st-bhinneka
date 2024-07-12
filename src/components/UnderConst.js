import { Fragment } from "react";
import './UnderConst.css'
import Navigasi from './Navigasi'
import Footer from './Footer'

function UnderConst() {
    return(
        <Fragment>
            <Navigasi />
            <div className="unser-const">
                <img src="404.jpg" alt="" className="gambar-under"></img>
            </div>
            <Footer />
        </Fragment>
    )
}

export default UnderConst