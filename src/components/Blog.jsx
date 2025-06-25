import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SEO from './SEO';
import '../styles/Blog.css'; 

export default function Blog() {
  const blogList = [
    { 
      id: '1', 
      title: 'Kontribusi Mahasiswa dalam Penanggulangan Cybercrime',
      excerpt: 'Peran dan kontribusi mahasiswa dalam menanggulangi cybercrime, khususnya pinjaman online ilegal dan judi online.',
      date: '2025-06-01',
      author: 'Erdi Pratama'
    },
    { 
      id: '2', 
      title: 'Blog 2: Coming Soon',
      excerpt: 'Artikel tentang topik menarik lainnya akan segera hadir.',
      date: '2024-12-20',
      author: 'Erdi Pratama'
    },
    { 
      id: '3', 
      title: 'Blog 3: Coming Soon',
      excerpt: 'Konten edukatif dan informatif lainnya akan segera dipublikasikan.',
      date: '2024-12-25',
      author: 'Erdi Pratama'
    },
    { 
      id: '4', 
      title: 'Blog 4: Coming Soon',
      excerpt: 'Artikel terbaru dengan topik yang menarik dan bermanfaat.',
      date: '2024-12-30',
      author: 'Erdi Pratama'
    },
  ];

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
                <h2 className="tugas-title">
                  {blog.title}
                </h2>
                <p className="blog-excerpt">
                  {blog.excerpt}
                </p>
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