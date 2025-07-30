import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SEO from './SEO';
import blogList from '../data/blogList';
import '../styles/Blog.css';

export default function Blog() {
  return (
    <>
      <SEO
        title="Daftar Blog | Erdi Pratama"
        description="Kumpulan artikel dan blog karya Erdi Pratama tentang teknologi, cybercrime, pengembangan web, dan topik edukatif lainnya."
        url="/blog"
        keywords="blog teknologi, artikel cybercrime, blog edukasi, blog Erdi Pratama"
      />
      <Navbar />
      <main className="tugas-container">
        <h1 className="tugas-heading">Daftar Blog</h1>
        <section className="tugas-grid" aria-label="Daftar artikel blog">
          {blogList.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="tugas-card"
              aria-label={`Baca artikel: ${blog.title}`}
            >
              <article className="blog-card-content">
                <h2 className="tugas-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <footer className="blog-meta">
                  <time className="blog-date" dateTime={blog.date}>
                    {blog.date}
                  </time>
                  <span className="blog-author"> oleh {blog.author}</span>
                </footer>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
