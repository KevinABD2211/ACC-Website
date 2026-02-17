import { Helmet } from "react-helmet-async";

type SEOProps = {
  /** Page-specific title, without the site name suffix */
  title: string;
  /** One or two concise sentences about the page */
  description: string;
  /** Canonical URL for this page (optional) */
  url?: string;
  /** Social preview image URL (optional, defaults to ACC logo) */
  image?: string;
};

const SITE_NAME = "Abdallah Contracting Company";
const DEFAULT_IMAGE = "/acc-logo.png";

/** Build absolute image URL for social platforms (they require full URLs) */
const getAbsoluteImageUrl = (path: string) =>
  typeof window !== "undefined" ? `${window.location.origin}${path}` : path;

export const SEO = ({ title, description, url, image }: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const imageUrl = getAbsoluteImageUrl(image ?? DEFAULT_IMAGE);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph - ACC logo everywhere */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="ACC - Abdallah Contracting Company Logo" />

      {/* Twitter - ACC logo everywhere */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="ACC - Abdallah Contracting Company Logo" />
    </Helmet>
  );
};

export default SEO;

