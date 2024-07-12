import { Fragment } from "react";
import Navigasi from './Navigasi'
import Footer from './Footer'
import './Kontak.css'

function Kontak() {
    return(
        <Fragment>
            <Navigasi />

            <div className="header-fakultas">
                <img src="bc-visi-misi.jpg" alt="" className='gambar-header-fakultas' />
                <div className="header-kotak-fakultas">
                    <p className="text-header-fakultas">Kontak</p>
                </div>
            </div>

            <div className="hubungi-kontak">
                <p className="apa">Hubungi Kami</p>
                <p className="text">Kami dengan senang hati mendengar opini, masukan, atau pertanyaan Anda</p>
            </div>

            <div className="con-kontak">
                <div className="kotak-kontak">
                    <p className="judul-kontak-kontak">Lokasi</p>
                    <p className="isi-kontak-kontak">Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128</p>
                    
                    <p className="judul-kontak-kontak">Email</p>
                    <p className="isi-kontak-kontak"><a href="mailto:office@satyaterrabhinneka.ac.id" target="_blank" rel="noopener noreferrer">office@satyaterrabhinneka.ac.id</a> </p>
                
                    <p className="judul-kontak-kontak">Telepon</p>
                    <p className="isi-kontak-kontak">(061) 8457702</p>

                    <p className="judul-kontak-kontak">Instagram</p>
                    <p className="isi-kontak-kontak"><a href="https://www.instagram.com/stbhinneka_uni/" target="_blank" rel="noopener noreferrer">Klik Disini</a></p>
                
                </div>

                <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.06006888991!2d98.60996607396275!3d3.573661350398572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fc7e012030d%3A0x376fa497cff6be89!2sUniversitas%20Satya%20Terra%20Bhinneka!5e0!3m2!1sid!2sid!4v1720465984633!5m2!1sid!2sid" 
                        width="600" 
                        height="450"
                        style={{border:0}} 
                        title="Maps Universitas STB"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                </div>

            </div>

            <Footer />
        </Fragment>
    )
}

export default Kontak