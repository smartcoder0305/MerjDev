import app from '../app';

const title = 'MERJ Exchange';
const description =
  'Global securities token and digital asset exchange ecosystem with direct market access for global traders and market intermediaries.';
const addressArr = app.contact.address.split(',');

const SEO = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: app.url,
    title,
    description,
    image: `${app.url}/static/images/merj-open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: 'merj.exchange',
  },
  twitter: {
    handle: '@merjexchange',
    cardType: 'summary_large_image',
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 10:00-16:00',
    streetAddress: `${addressArr[0]} ${addressArr[1]}`,
    addressLocality: addressArr[2],
    postalCode: '0000',
    addressCountry: addressArr[addressArr.length - 1],
    priceRange: '$$$',
  },
};

export default SEO;
