import { Fragment } from "react";
import './Fakultas.css'
import Navigasi from './Navigasi'
import Footer from './Footer'

function Fakultas() {
    return (
        <Fragment>
            <Navigasi />
            <div className="header-fakultas">
                <img src="bc-kontak.jpg" alt="" className='gambar-header-fakultas' />
                <div className="header-kotak-fakultas">
                    <p className="text-header-fakultas">Fakultas</p>
                    <p className='text-fakultas'>Secara berkelanjutan, Universitas Satya Terra Bhinneka akan menyelenggarakan Fakultas dan Program Studi yang relevan dengan kebutuhan pasar yang terus berubah</p>
                </div>
            </div>

            {/* kewirausahaan */}
            <div className="container-fakultas">
                <div className="card-fakultas">
                <p className="nama-fakultas aw">Fakultas Ekonomi dan Bisnis</p>
                </div>
            </div>

            <div className="container-fakultas">
                <div className="card-fakultas">
                    <p className="nama-prodi">Program Studi S1 Kewirausahaan</p>
                    <div className="gambar-fakultas">
                        <img src='ekonomi-dan-bisnis.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini mengembangkan pengetahuan dan keterampilan yang mendukung mahasiswa/i untuk menjadi seorang pengusaha (entrepreneur), seperti strategi pengembangan produk, pemasaran, industri kreatif, serta pengelolaan bisnis dan keuangan yang berkelanjutan. Dalam prodi ini mahasiswa akan belajar ekonomi mikro dan makro, manajemen sumberdaya manusia, sistem informasi bisnis, bisnis internasional.</p>
                    <p className="isi-card">Program ini mengedepankan pendekatan project-based learning, cocok bagi mahasiswa/i yang ingin memulai bisnis.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Founder start-up, CEO, pebisnis, konsultan bisnis, analis pemasaran, konsultan perusahaan, investor, manajer investasi, penyusun kebijakan strategis perusahaan, dan lain sebagainya.</p>
                </div>

                <div className="card-fakultas">
                    <p className="nama-prodi">Program Studi S1 Bisnis Digital</p>
                    <div className="gambar-fakultas">
                        <img src='ekonomi-dan-bisnis.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini membekali mahasiswa dengan pengetahuan dan keterampilan untuk mengoptimalkan internet untuk berbisnis secara digital secara berkelanjutan. Mahasiswa/i akan dibekali dengan pengetahuan dan keterampilan berkenaan dengan perilaku konsumen, e-commerce, komunikasi digital, sosial media, hingga analisa big data.</p>
                    <p className="isi-card">Program ini mengedepankan pendekatan project-based learning, cocok untuk mahasiswa/i yang tertarik mengoptimalisasikan ruang digital untuk berwirausaha.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Founder start-up berbasis digital, Chief Marketing Officer perusahaan, analis bisnis digital, big data scientist, pelaku bisnis digital, konsultan bisnis berbasis digital, dan lain sebagainya.</p>
                </div>
            </div>

            {/*informatika  */}
            <div className="container-fakultas besar">
                <div className="card-fakultas">
                <p className="nama-fakultas aw">Fakultas Teknologi dan Ilmu Komputer</p>
                </div>
            </div>

            <div className="container-fakultas">
                <div className="card-fakultas">
                    <p className="nama-prodi">Program Studi S1 Informatika</p>
                    <div className="gambar-fakultas">
                        <img src='teknologi-dan-ilmu-komputer.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini membekali mahasiswa dengan pengetahuan dan keterampilan untuk mempelajari pemrograman dan komputasi, pengembangan perangkat lunak, serta perancangan komputer, multimedia, website, dan artificial intelligence.</p>
                    <p className="isi-card">Dengan mengedepankan project-based learning, program studi ini akan membekali mahasiswa/i dengan pengetahuan dan keterampilan yang relevan, terbaru (up to date), dan berkelanjutan.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Technopreneur, data engineer, software engineer, pengembang website dan aplikasi, SEO specialist, konsultan IT, pengembang game, dan lain sebagainya.</p>
                </div>
            </div>

            {/* kehutanan */}
            <div className="container-fakultas besar">
                <div className="card-fakultas">
                <p className="nama-fakultas aw">Fakultas Pertanian dan Kehutanan</p>
                </div>
            </div>

            <div className="container-fakultas">
            <div className="card-fakultas">

                    <p className="nama-prodi">Program Studi S1 Agribisnis</p>
                    <div className="gambar-fakultas">
                        <img src='pertanian.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini memadukan pengetahuan dan keterampilan agrikultural dengan keahlian berbisnis, memanfaatkan kemajuan teknologi komunikasi dalam era pemasaran dgital. Dalam prodi ini, mahasiswa/i akan belajar mengenai ekonomi sumber daya alam dan lingkungan, ekonomi pembangunan pertanian, agroindustri, pertanahan, pengelolaan perkebunan, hukum agraria, tata niaga pertanian, hingga pengelolaan bisnis pertanian.</p>
                    <p className="isi-card">Program studi ini mengkombinasikan pembelajaran di kelas dengan praktek di lapangan, cocok bagi mahasiswa/i yang tertarik mengembangkan bisnis pertanian yang berkelanjutan.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Founder start up berbasis pertanian, konsultan pertanian, pengusaha produk pertanian, pegiat LSM yang mendampingi para petani, penyalur produk pertanian, dan lain sebagainya.</p>
                </div>

                <div className="card-fakultas">
                    <p className="nama-prodi">Program Studi S1 Manajemen Hutan</p>
                    <div className="gambar-fakultas">
                        <img src='pertanian.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini membekali mahasiswa/i dengan pengetahuan dan keterampilan mengenai ekologi hutan dan posisi hutan dalam kontek sosio-antropologis, manajemen kesatuan pengelolaan hutan, analisis mengenai dampak lingkungan, konservasi sumber daya hutan, ilmu tanah hutan, ekologi hutan, anatomi dan identifikasi kayu. Mahasiswa/i juga akan dibekali bisnis berbasis kehutanan yang berkelanjutan.</p>
                    <p className="isi-card">Program ini mengkombinasikan pembelajaran di kelas, praktikum di laboratorium dan praktek di lapangan.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Ahli konservasi hutan, spesialis konservasi alam, pengawas hutan, ahli peta geografi, peneliti geografi, pegiat LSM di bidang konservasi hutan, peneliti, sociopreneur produk-produk kehutanan yang berkelanjutan.</p>
                </div>
            </div>

             {/*kebidanan  */}
            <div className="container-fakultas besar">
                <div className="card-fakultas">
                    <p className="nama-fakultas aw">Fakultas Kesehatan</p>
                </div>
            </div>
            <div className="container-fakultas">
                <div className="card-fakultas">
                    <p className="nama-prodi">Program Studi D3 Kebidanan</p>
                    <div className="gambar-fakultas">
                        <img src='kesehatan.jpg' alt="" />
                    </div>
                    <p className="isi-card">Program studi ini membekali mahasiswa/i dengan pengetahuan dan keterampilan yang berkaitan dengan kesehatan ibu hamil, kesehatan reproduksi, penanganan persalinan, ilmu kesehatan anak, epidemiologi, serta kesehatan masyarakat.</p>
                    <p className="isi-card">DProgram ini mengkombinasikan pembelajaran di kelas dengan praktek di lapangan.</p>
                    <p className="prospek-fakultas">Prospek Karir</p>
                    <p className="isi-card">Bekerja sebagai bidan ataupun perawat di instalasi kesehatan pemerintah seperti RSUD dan puskesmas dengan status ASN, bekerja di balai kesehatan atau rumah sakit swasta, atau membuka klinik sendiri jika sudah memenuhi syarat.</p>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Fakultas