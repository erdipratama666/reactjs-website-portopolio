import React, { useEffect } from 'react';

const SEO = ({ 
  title = 'Erdi Pratama | Web Developer', 
  description = 'Portofolio Erdi Pratama, Web Developer yang berfokus pada pengembangan website modern dengan React.js', 
  keywords = 'Erdi Pratama, web developer, portofolio, react developer, frontend',
  image = '/og-image.jpg',
  url = '/'
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', `https://www.erdipratama.my.id${image}`, 'property');
    updateMetaTag('og:url', `https://www.erdipratama.my.id${url}`, 'property');
    updateMetaTag('og:type', 'website', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', `https://www.erdipratama.my.id${image}`, 'name');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `https://www.erdipratama.my.id${url}`;
    
    // Add JSON-LD Schema
    addJsonLdSchema();
    
  }, [title, description, keywords, image, url]);
  
  const updateMetaTag = (name, content, attributeName = 'name') => {
    let metaTag = document.querySelector(`meta[${attributeName}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attributeName, name);
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
  };
  
  const addJsonLdSchema = () => {
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Create new schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Erdi Pratama",
      "url": "https://www.erdipratama.my.id",
      "image": "https://www.erdipratama.my.id/profile-picture.png",
      "sameAs": [
        "https://www.instagram.com/rditamaa",
        "https://www.tiktok.com/@erdipratamaa"
      ],
      "jobTitle": "Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Zamal Collection"
      }
    };
    
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  };
  
  return null; // Tidak render apapun
};

export default SEO;