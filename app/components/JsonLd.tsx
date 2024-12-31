export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexandros Mathopoulos',
    alternateName: 'Lex Mathopoulos',
    url: 'https://mathopoulos.com',
    jobTitle: ['Product Manager', 'Software Engineer', 'Designer'],
    worksFor: {
      '@type': 'Organization',
      name: 'Trello',
    },
    description: 'Part time Designer, Engineer, & Product Manager. Currently focused on building some new health apps and making Trello great again.',
    sameAs: [
      'https://twitter.com/lex_build',
      'https://github.com/lexmathopoulos',
      'https://linkedin.com/in/alexandrosmathopoulos'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 