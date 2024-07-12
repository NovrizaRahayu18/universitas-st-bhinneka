import { Fragment } from 'react'
import './Profil.css'
import Navigasi from './Navigasi'
import Footer from './Footer'
import Card from './Card'

function Profil() {
    return(
        <Fragment>
            <Navigasi />
            <div className="header-profil">
                <img src="bc-publikasi.jpg" alt="" className='gambar-header-profil' />
                <div className="header-kotak-profil">
                    <p className="text-header-profil">Profil</p>
                </div>
            </div>

            <div className='container-profil'>
                <div className='profil-univ'>
                    <p className='judul-kontak'>Profil Universitas</p>
                    <p className='text-kontak'>Universitas ST Bhineka merupakan perguruan tinggi yang berlokasi di Medan Sunggal dan bervisi menjadi perguruan tinggi terdepan dalam mengembangkan ilmu pengetahuan, teknologi, dan riset yang berbasis nilai-nilai keberkelanjutan (sustainability) dan keberagaman. Melalui perencanaan tata kelola fasilitas, pengembangan kurikulum, dan penumbuhan budaya institusi yang inklusif, kolaboratif, dan inovatif, Universitas ST Bhineka berkomitmen menjadi alma mater (secara harfiah berarti “ibu yang mengasuh”) yang “melahirkan” generasi muda yang kritis, kompeten, berdaya saing, dan berkesadaran ekologis dan multikultural.</p>
                    <p className='text-kontak'>Universitas Satya Terra Bhinneka menggunakan kombinasi <b>3 bahasa</b>; 1 bahasa asing (latin), 1 bahasa Asia yang mempengaruhi bahasa Indonesia (Sanskerta), dan 1 bahasa lokal (Jawa Kuno). Ini <b>melambangkan relevansi Universitas Satya Terra Bhinneka dalam dunia internasional, regional (Asia), dan lokal (Indonesia)</b>. Universitas Satya Terra Bhinneka menggunakan wawasan internasional, regional, dan lokal dalam membangun generasi bangsa yang akan menjadi agen perubahan di dunia internasional, regional, dan lokal.</p>
                </div>

                <div className='parent-profil'>
                <p className='judul-kontak oi'>Filosofi Nama</p>
                
                <div className='container-nama'>
                    <div className='card1-kontak'>
                        <p className='judul1-kontak'>Satya (Sanskerta)</p>
                        <ul className='text2-kontak'>
                            <li><b><i>Truth </i></b>(kebenaran/kejujuran)</li>
                            <li><b><i>Essence</i></b> (inti/pokok/dasar)</li>
                            <li><b><i>Virtue</i></b> (kebajikan/kebaikan/nilai baik)</li>
                            <li><b><i>Loyal </i></b>(Setia)</li>
                        </ul>
                    </div>

                    <div className='card1-kontak'>
                        <p className='judul1-kontak'>Terra (Latin)</p>
                        <ul className='text2-kontak'>
                            <li><b><i>Earth </i></b>(bumi)</li>
                            <li><b><i>Land </i></b> (tanah)</li>
                        </ul>
                    </div>
            
                    <div className='card1-kontak'>
                        <p className='judul1-kontak'>Bhinneka (Jawa Kuno)</p>
                        <ul className='text2-kontak'>
                            <li><b><i>Diversity </i></b>(keanekaragaman)</li>

                        </ul>
                    </div>
                </div>
                </div>

                <div className='container-logo'>
                    <p className='judul-kontak oi'>Filosofi Logo</p>
                    <div className='logo-kontak'>
                        <img src='logo.png' alt="" className='logo-kontak' />
                    </div>
                </div>

                <div className='parent-logo'>
                    < Card 
                    judul="Global & Sustainable"
                    img="icon-global.png"
                    alt=""
                    text="Melambangkan kebaikan kelangsungan hidup manusia dan alam sekitarnya secara keberlanjutan."
                    />

                    <Card 
                    judul="Diversity"
                    img="icon-diversity.png"
                    alt=""
                    text="Terbentuk dari gabungan orang orang yang saling merangkul dari latar belakang yang beragama. Dan tidak berorientasi pada golongan, agama, ideologi atau kelompok tertentu."
                    />
                </div>
                <div className='parent-logo'>
                    <Card 
                    judul="Grow"
                    img="icon-grow.png"
                    alt=""
                    text="ST Bhinneka berkomitmen untuk menghasilkan generasi bangsa menjadi agen perubahan di dunia dengan membangun pola pikir yang merdeka, bernalar kritis, dan setia pada hakikat dan tujuan pendidikan yang sebenarnya."
                    />

                    <Card 
                    judul="Multy Colors"
                    img="icon-colors.png"
                    alt=""
                    text="Logo ST Bhinneka memiliki 5 warna yang menggambarkan Pancasila."
                    />
                </div>
            </div>

    
            <Footer />
        </Fragment>
    )
}

export default Profil