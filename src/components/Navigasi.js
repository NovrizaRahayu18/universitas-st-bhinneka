import { Fragment } from "react";
import './Navigasi.css'
import { Link } from "react-router-dom";

function Navigasi() {
    return(
        <Fragment>
            <nav className="navigasi">
                <div className="container-nav">
                    <img src='logo.png' alt="" className='logo-nav'/>
                    <ul className="menu-nav">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/profil'>Profil</Link></li>
                        <li><Link to='/fakultas'> Fakultas</Link></li>
                        <li><Link to='/404' >Publikasi</Link></li>
                        <li><Link to='/kontak' >Kontak</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigasi