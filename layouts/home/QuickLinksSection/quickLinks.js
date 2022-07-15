/*
  [
    {
      imageSrc: string,
      title: string,
      subtitle: string,
      buttonText: string,
      href: string,
    }
  ]
*/

const quickLinks = [
  {
    imageSrc: '/static/images/pages/home/icon-springboard-about.svg',
    title: 'About MERJ',
    subtitle: 'Learn more about the company, how we started and our vision',
    buttonText: 'LEARN MORE',
    href: '/about/about-merj',
  },
  {
    imageSrc: '/static/images/pages/home/icon-springboard-invest.svg',
    title: 'Get in touch with MERJ',
    subtitle: 'You can also visit our FAQ page',
    buttonText: 'LEARN MORE',
    href: '/enquiries/general/contact/',
    faqLink: <a href='/enquiries/general/faqs'>here</a>
  },
  {
    imageSrc: '/static/images/pages/home/icon-springboard-markets.svg',
    title: 'Markets & Listings',
    subtitle: 'Equities Market, Debt Market and Derivatives Market',
    buttonText: 'LEARN MORE',
    href: '/exchange/market/listings/',
  },
];

export default quickLinks;
