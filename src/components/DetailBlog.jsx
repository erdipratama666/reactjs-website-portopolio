import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import SEO from './SEO';
import blog1 from '../blogs/blog1';
import blog2 from '../blogs/blog2';
import '../styles/DetailBlog.css';

const blogDetails = {
  '1': blog1,
  '2': blog2,
  // Tambahkan blog lain sesuai id-nya
};

export default function DetailBlog() {
  const { id } = useParams();
  const currentBlog = blogDetails[id];

  if (!currentBlog) {
    return (
      <>
        <Navbar />
        <div className="blog-container">
          <h1>Blog tidak ditemukan</h1>
          <Link to="/blog">Kembali ke Blog</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={currentBlog.title}
        description={currentBlog.excerpt || currentBlog.title}
        url={`/blog/${id}`}
        image={currentBlog.image || '/og-image.jpg'}
      />
      <Navbar />
      <div className="blog-container">
        <article className="blog-article">
          <header>
            <h1>{currentBlog.title}</h1>
            <div className="blog-meta">
              <p>Penulis: {currentBlog.author}</p>
              <p>Email: {currentBlog.email}</p>
            </div>
          </header>
          <section
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: currentBlog.content }}
          />
          <footer>
            <Link to="/blog" className="back-link">← Lihat Blog Lainnya</Link>
          </footer>
        </article>
      </div>
    </>
  );
}
