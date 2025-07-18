import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import blog1 from '../blogs/blog1';
import blog2 from '../blogs/blog2';
import '../styles/DetailBlog.css';

const blogDetails = {
  '1': blog1,
  '2': blog2,
  // import dan tambahkan blog lain sesuai id
};

export default function DetailBlog() {
  const { id } = useParams();
  const currentBlog = blogDetails[id];

  if (!currentBlog) {
    return (
      <>
        <Navbar />
        <h1>Blog tidak ditemukan</h1>
        <Link to="/blog">Kembali</Link>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="blog-container">
        <article className="blog-article">
          <header>
            <h1>{currentBlog.title}</h1>
            <div>
              <p>{currentBlog.author}</p>
              <p>{currentBlog.email}</p>
            </div>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: currentBlog.content }}
          />
          <div>
            <Link to="/blog">Lihat Blog Lainnya</Link>
          </div>
        </article>
      </div>
    </>
  );
}
