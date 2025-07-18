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
        description="Kumpulan artikel dan blog karya Erdi Pratama tentang teknologi, cybercrime, dan topik edukatif lainnya."
        url="/blog"
      />
      <Navbar />
      <div className="tugas-container">
        <h1 className="tugas-heading">Daftar Blog</h1>
        <div className="tugas-grid">
          {blogList.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="tugas-card"
            >
              <div className="blog-card-content">
                <h2 className="tugas-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-author">oleh {blog.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
