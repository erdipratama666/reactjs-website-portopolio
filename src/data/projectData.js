import homeImg from '../assets/home.png';
import profileImg from '../assets/profile.png';
import sejarahImg from '../assets/sejarah.png';
import visimisiImg from '../assets/visi-misi.png';
import guruImg from '../assets/guru.png';
import kurikulumImg from '../assets/kurikulum.png';
import kalenderImg from '../assets/kalender.png';
import saranaImg from '../assets/sarana.png';
import prestasiImg from '../assets/prestasi.png';
import ppdbImg from '../assets/ppdb.png';
import kontakImg from '../assets/kontak.png';


import homeSpakarImg from '../assets/home-spakar.png';
import dataSpakarImg from '../assets/data-spakar.png';
import indikatorSpakarImg from '../assets/indikator-spakar.png';
import konsultasiSpakarImg from '../assets/konsultasi-spakar.png';

const projectData = [
  {
    id: 1,
    title: 'Website Sekolah MA As-Siroji',
    description: 'Portal online MA As-Siroji yang menyediakan informasi sekolah dan layanan pendaftaran siswa.',
    mainImage: homeImg,
    images: [homeImg, profileImg, sejarahImg, visimisiImg, guruImg , kurikulumImg, kalenderImg , saranaImg, prestasiImg, ppdbImg, kontakImg],
    url: 'https://www.maassiroji.sch.id/'
  },
  {
    id: 2,
    title: 'Sistem Pakar Penentuan Bakat',
    description: 'Platform digital yang membantu orangtua dan guru mengidentifikasi bakat anak.',
    mainImage: homeSpakarImg,
    images: [homeSpakarImg, dataSpakarImg, indikatorSpakarImg, konsultasiSpakarImg],
    url: 'https://sistem-pakar-bakat.vercel.app/'
  }
];

export default projectData;
