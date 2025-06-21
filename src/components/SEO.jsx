import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Erdi Pratama | Fullstack Developer',
  description = 'Portofolio Erdi Pratama, Fullstack Developer yang berfokus pada pengembangan website modern dengan React.js',
  keywords = 'Erdi Pratama, fullstack developer, portofolio, react developer, frontend, backend',
  image = '/og-image.jpg',
  url = '/'
}) => {
  const fullUrl = `https://www.erdipratama.my.id${url}`;
  const fullImage = `https://www.erdipratama.my.id${image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Erdi Pratama",
    "url": "https://www.erdipratama.my.id",
    "image": "https://www.erdipratama.my.id/profile-picture.webp",
    "sameAs": [
      "https://www.instagram.com/rditamaa",
      "https://www.tiktok.com/@erdipratamaa"
    ],
    "jobTitle": "Fullstack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Zamal Collection"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
