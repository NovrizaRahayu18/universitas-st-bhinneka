import { Fragment } from "react";
import './Home.css'
import Navigasi from './Navigasi'
import Footer from './Footer'
import { useNavigate } from "react-router-dom"

function Home() {
    const  navigate = useNavigate()
    return(
        <Fragment>
            <Navigasi />

            <div className="header-home">
                <img src="bg1.jpg" alt="" className='gambar-header-home' />
                <div className="header-kotak-home">
                    <p className="text-header-home">Universitas <br/>Satya Terra Bhinneka</p>
                </div>
            </div>

            <div className="container-home">
                <div className="sambutan-home">
                    <p className="judul-home">Sambutan Pendiri Yayasan Perguruan Sultan Iskandar Muda</p>
                    <div className="parent-gambar-sambutan">
                        <img src="dr-sofyan-tan.png" alt="" className="gambar-sambutan" />
                        <div className="container-nama-home">
                            <p className='nama-home'>dr. Sofyan Tan Ketua</p> 
                            <p className='isi-profil-home'> Dewan Pembina YPSIM</p>
                            <p className='isi-profil-home'> Anggota Komisi X DPR RI</p>
                    
                        </div>
                    </div>
                    <p className="text-home">Salam Sejahtera, Assalamualaikum, Om Swastiastu, Namo Buddhaya, Salam Kebajikan, Horas</p>
                    <p className="text-home">Berawal dari kegelisahan melihat segregasi sosial, ketimpangan ekonomi, serta diskriminasi rasial dan yang berbasis agama/kepercayaan, saya memutuskan untuk meninggalkan karir saya sebagai dokter demi mendirikan Yayasan Perguruan Sultan Iskandar Muda (YPSIM). Selain untuk memperkuat nilai-nilai keberagaman, kesetaraan, dan keberlanjutan, yayasan tersebut juga diharapkan mampu memfasilitasi tumbuh-kembang minat dan potensi anak muda lintas agama, suku, dan kelas sosial-ekonomi.</p>
                    <p className="text-home">Demi mencapai niat mulia di atas, YPSIM menyelenggarakan pendidikan mulai dari tingkat anak usia dini, dasar, menengah bawah, menengah atas, dan kejuruan. Tahun ini, di usianya yang ke-35, YPSIM merintis pembangunan Universitas Satya Terra Bhinneka. Sesuai dengan filosofi namanya, Universitas Satya Terra Bhinneka didesain menjadi universitas yang berkesadaran keberagaman dan keberlanjutan dengan komitmen penuh terhadap kebenaran ilmu pengetahuan dan kebaikan kemanusiaan. Harapan saya, Universitas Satya Terra Bhinneka dapat melahirkan lulusan yang tidak hanya memiliki kompetensi global, tetapi juga berkesadaran keberagaman serta mampu memberi dampak positif yang berkelanjutan.</p>
                    <p className="text-home"></p>
                    <p className="text-home"></p>
                </div>

                <div className="sambutan-home">
                    <p className="judul-home">Sambutan Rektor Universitas Satya Terra Bhinneka</p>
                    <div className="parent-gambar-sambutan">
                        <img src="tracey.png" alt="" className="gambar-sambutan" />
                        <div className="container-nama-home">
                            <p className='nama-home'>Dr. Tracey Yani Harjatanaya, B.A., M.A., M.Sc, DPhil,</p> 
                            <p className='isi-profil-home'> Rektor Universitas Satya Terra Bhinneka</p>
                    
                        </div>
                    </div>
                    <p className="text-home">Di tengah disrupsi teknologi dan krisis iklim yang mengancam, peran perguruan tinggi dalam mempersiapkan generasi mendatang yang kompeten dan berkesadaran ekologis menjadi semakin penting.Untuk menjawab tantangan tersebut, Universitas Satya Terra Bhinneka melaksanakan, pertama, pembelajaran holistik yang mengintegrasikan sesi di dalam kelas dan di luar kelas serta mendorong mata kuliah interdisipliner,</p>
                    <p className="text-home">Kedua, menjaring dosen profesional lulusan dalam dan luar negeri, mempersiapkan fasilitas pembelajaran yang memadai dan budaya kuliah yang inklusif</p>
                    <p className="text-home">Ketiga, kami membangun Centre for Research, Innovation, Sustainability, and Entrepreneurship untuk peningkatan kualitas riset dan memfasilitasi minat mahasiswa dalam berwirausaha dan berinovasi.</p>
                    <p className="text-home">Keempat, membangun jejaring dan kemitraan lintas pemangku kepentingan secara lokal, nasional, dan internasional untuk mendukung pembelajaran yang menjawab kebutuhan di masa kini dan masa datang.</p>
                    <p className="text-home">Kelima, membangun ekosistem civitas akademika bagi dosen dan mahasiswa yang mendorong kualitas pembelajaran, penelitian, dan pengabdian kepada masyarakat semakin optimal.</p>
                    <p className="text-home">Dengan keyakinan bahwa perguruan tinggi harus menjadi “alma mater” (ibu asuh), kami percaya bahwa perguruan tinggi harus menjadi ruang di mana keberagaman dirayakan, inklusivitas dirawat, kesadaran ekologis diperkuat, dan potensi mahasiswa didukung untuk tumbuh.</p>
                    <p className="text-home">Kami percaya bahwa dengan upaya kolaboratif dan visioner tersebut, Universitas Satya Terra Bhinneka dapat menjadi kampus terdepan di Indonesia yang menginkorporasi “kurikulum hijau” dan konsep inklusivitas ke dalam pembelajaran sambil tetap adaptif terhadap, dan inovatif untuk menjawab, kebutuhan industri yang akseleratif dan isu sosial yang mendesak.</p>
                    <p className="text-home">Mari bertumbuh bersama Universitas Satya Terra Bhinneka.</p>
                </div>

                <div className="sambutan-home">
                    <p className="judul-home">Fakultas</p>
                    <p className="text-home-center">Secara berkelanjutan, Universitas Satya Terra Bhinneka akan menyelenggarakan Fakultas dan Program Studi yang relevan dengan kebutuhan pasar yang terus berubah</p>
                    <div className="tombol">
                        <button onClick={() => navigate('/fakultas')}>Selengkapnya...</button>
                    </div>
                </div>

                <div className="visi-misi">
                    <p className='judul-home'>VISI & MISI Universitas Satya Terra Bhinneka</p>
                    <p className='judul-home'>VISI</p>
                    <p className="text-home-center">“Menjadi perguruan tinggi yang unggul dalam mengembangkan ilmu pengetahuan, teknologi, dan penelitian yang berbasis prinsip berkelanjutan, berwawasan global, inovatif, dan inklusif untuk meningkatkan pembangunan manusia Indonesia secara holistik pada tahun 2048.”</p>
                
                    <p className='judul-home ae'>MISI</p>
                    <ul>
                    <li className="text-home2">Menyelenggarakan pendidikan berbasis teknologi dan penelitian, berprinsip inklusif, berwawasan global, berkelanjutan, dan bermanfaat.</li>
                    <li className="text-home2">Menyelenggarakan penelitian yang kolaboratif, interdisipliner, inovatif, dan bermanfaat</li>
                    <li className="text-home2">Menyelenggarakan pengabdian kepada masyarakat yang efektif, partisipatif, dan tepat sasaran.</li>
                    <li className="text-home2">Membangun ekosistem universitas yang berkelanjutan, inklusif, egaliter, suportif, dan demokratis.</li>
                    <li className="text-home2">Mengembangkan kualitas dan kompetensi civitas akademika.</li>
                    </ul>
                </div>

                <div className="visi-misi">
                    <p className='judul-home'>Struktur Organisasi Universitas Satya Terra Bhinneka</p>
                    <img src="struktur.jpg" alt="" className="struktur"/>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home