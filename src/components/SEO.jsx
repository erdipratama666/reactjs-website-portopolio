import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Erdi Pratama | Web Developer',
  description = 'Erdi Pratama adalah Web Developer yang berfokus pada pengembangan website dengan JavaScript dan framework modern.',
  keywords = 'Erdi Pratama, web developer, JavaScript, React, portfolio, fullstack developer, frontend',
  image = '/og-image.jpg',
  url = '/',
  robots = 'index, follow'
}) => {
  const baseUrl = 'https://www.erdipratama.my.id';
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = `${baseUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Erdi Pratama",
        "url": baseUrl,
        "image": `${baseUrl}/profile-picture.webp`,
        "sameAs": [
          "https://www.instagram.com/rditamaa",
          "https://www.tiktok.com/@erdipratamaa"
        ],
        "jobTitle": "Web Developer",
        "description": "Erdi Pratama adalah Web Developer yang berfokus pada pengembangan website dengan JavaScript dan framework modern.",
        "worksFor": {
          "@type": "Organization",
          "name": "Zamal Collection"
        }
      },
      {
        "@type": "WebSite",
        "name": "Erdi Pratama | Web Developer",
        "url": baseUrl,
        "inLanguage": "id",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "name": title,
        "url": fullUrl,
        "description": description,
        "inLanguage": "id"
      }
    ]
  };

  return (
    <Helmet titleTemplate="%s | Erdi Pratama">
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Erdi Pratama" />
      <meta name="robots" content={robots} />
      <meta httpEquiv="Content-Language" content="id" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Erdi Pratama" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@erdipratamaa" />
      <meta name="twitter:creator" content="@erdipratamaa" />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
