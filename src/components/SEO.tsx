import { Helmet } from "react-helmet-async";

type SEOProps = {
  /** Page-specific title, without the site name suffix */
  title: string;
  /** One or two concise sentences about the page */
  description: string;
  /** Canonical URL for this page (optional) */
  url?: string;
  /** Social preview image URL (optional) */
  image?: string;
};

const SITE_NAME = "Abdallah Contracting Company";

export const SEO = ({ title, description, url, image }: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;

