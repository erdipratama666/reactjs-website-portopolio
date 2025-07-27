import homeImg from '../assets/home.png';
import profileImg from '../assets/profile.png';
import ppdbImg from '../assets/ppdb.png';
import sejarahImg from '../assets/sejarah.png';
import visimisiImg from '../assets/visi-misi.png';

import homeSpakarImg from '../assets/home-spakar.png';
import dataSpakarImg from '../assets/data-spakar.png';
import indikatorSpakarImg from '../assets/indikator-spakar.png';
import konsultasiSpakarImg from '../assets/konsultasi-spakar.png';

const projectData = [
  {
    id: 1,
    title: 'Website Sekolah MA As-Siroji',
    description: 'Website sekolah MA As-Siroji memudahkan siswa dan guru dalam mengakses informasi penting seperti profil sekolah, pendaftaran online, dan data siswa.',
    mainImage: homeImg,
    images: [homeImg, profileImg, ppdbImg, sejarahImg, visimisiImg],
    url: 'https://www.maassiroji.sch.id/'
  },
  {
    id: 2,
    title: 'Sistem Pakar Penentuan Bakat',
    description: 'Aplikasi web sistem pakar untuk membantu siswa mengenali potensi bakat mereka menggunakan metode Forward Chaining.',
    mainImage: homeSpakarImg,
    images: [homeSpakarImg, dataSpakarImg, indikatorSpakarImg, konsultasiSpakarImg],
    url: 'https://sistem-pakar-bakat.vercel.app/'
  }
];

export default projectData;
