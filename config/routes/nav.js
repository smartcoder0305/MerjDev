/*
  Routes:

  Routes field is an array (order is important).
  A route can have an href. If so, it should have a page in the pages dir.
  A route should always have a title.
  A route can have nested routes within it.

  NOTE: Some routes can be in-page links, in which case they are not covered here since they do not form part of the nav.
*/

// FIXME: Add non-nav routes with a boolean flag, hideFromNav
const navRoutes = [
  {
    title: 'Exchange',
    routes: [
      {
        title: 'Market',
        routes: [
          {
            href: '/exchange/market/listings',
            title: 'Market Listings',
            description:
              'MERJ Exchange is a live, multi-market, end to end securities exchange. MERJ is developing a next generation global exchange ecosystem along with partners and participating service providers. The exchange will support global issuers of securities, digital assets and hybrid instruments through the entire asset life cycle from issuance to trading, clearing, settlement and registry.',
          },
          {
            href: '/exchange/market/overview',
            title: 'Overview',
            description: 'Market Listings Overview',
          },
          {
            href: '/exchange/market/equities',
            title: 'Equities',
            description:
              'The Equities Market is split into three different “boards” where listed equity securities are grouped according to their classification pursuant to the Listing Rules.',
          },
          {
            href: '/exchange/market/debt',
            title: 'Debt',
            description:
              'The Debt Market caters for listings of commercial and public sector debt securities including both short and long term debt instruments issued by global issuers.',
          },
          {
            href: '/exchange/market/derivatives',
            title: 'Derivatives',
            description:
              'The MERJ Exchange Listed Derivatives Market permits a wide range of investors to meet their objectives (e.g. best execution, best pricing, transparency, regulated market, central clearing) within the comfort of a regulated derivatives market. MERJ EXCHANGE provides a neutral, level playing field for all market participants, regardless of status, size or activity levels.',
          },
          {
            href: '/exchange/market/merj-primary',
            title: 'MERJ Primary',
            description:
              'MERJ Primary will be global deal promotion, issuance and distribution platform for complaint global securities token offerings. operated by MERJ EXCHANGE under its securities exchange license. MERJ Primary will match global issuers seeking to list and sell digital assets, securities and hybrid instruments with global investors (including US investors), seeking to purchase these instruments.',
          },
          {
            href: '/about/news/?category=News',
            title: 'Market News',
            description: 'MERJ Exchange market related announcements and news.',
          },
        ],
      },
      {
        title: 'Post Trade',
        routes: [
          {
            href: '/exchange/post-trade/summary',
            title: 'Post Trade Summary',
            description:
              'The MERJ Exchange Market Rules require transactions to be cleared and settled pursuant to the rules of an appointed clearing agency on a strict delivery vs. payment basis. For “cash market” securities (e.g. equities and debt) MERJ has adopted one of the three IOSCO and G30 recommended delivery versus payment frameworks being DVP Model 1 (“Real Time Gross Settlement”).',
          },
          {
            href: '/exchange/post-trade/merj-clear',
            title: 'MERJ Clear',
            description:
              'MERJ Clearing and Settlement Limited (MERJ CLEAR) is a licensed clearing agency (i.e. clearing house) pursuant to the Securities Act regulated by the FSA and an authorized and regulated operator of a securities clearing and settlement system pursuant to the National Payment Systems Act regulated by the Central Bank. MERJ CLEAR provides clearing and settlement services for all instruments supported by the exchange and MERJ DEP, including DLT Assets.',
          },
          {
            href: '/exchange/post-trade/merj-dep',
            title: 'MERJ Dep',
            description:
              'MERJ Depository and Registry Limited (MERJ DEP) is a licensed securities facility pursuant to the Securities Act. MERJ DEP provides securities registry services for Seychelles companies and foreign companies if permitted by foreign company law. MERJ DEP also provides depository services for securities and DLT Assets (coming soon) and other ancillary services necessary to support the operation of the MERJ EXCHANGE.',
          },
          {
            href: '/exchange/post-trade/abssf-overview',
            title: 'MERJ-S',
            description:
              'page',
          },
        ],
      },
      {
        title: 'Service Providers',
        routes: [
          {
            href: '/exchange/service-providers/members',
            title: 'Members',
            description:
              'MERJ Exchange Members are qualified global financial services firms that participate in one or more of our markets',
          },
          {
            href: '/exchange/service-providers/listing-sponsors',
            title: 'Listing Sponsors',
            description:
              'The MERJ listing framework provides for the role of a listing sponsor (Sponsor Advisor). Sponsor Advisors are qualified global advisors of issuers of securities (including securities tokens) and digital assets. A MERJ approved Sponsor Advisor must be appointed by an issuer seeking to apply for a primary listing of securities or digital assets on either MERJ Primary or MERJ EXCHANGE.',
          },
          {
            href: '/exchange/service-providers/ecosystem',
            title: 'Ecosystem',
            description:
              'MERJ is building a global financial market ecosystem with participation and support not only from its Members and Sponsor advisors, but also from global service providers.',
          },
          {
            href: '/exchange/service-providers/isin',
            title: 'ISIN',
            description:
              'MERJ Exchange is the approved National Numbering Agency and issuer of International Securities Identification Numbers (ISIN) in the Seychelles. The ISIN identifies securities (shares, options, futures, derivatives and debt) and is a number unique to the security itself: it does not identify the platform or exchange that the security is traded on. A separate number is usually attached to the ISIN to identify its trading location which is known as a Market Identification Code. No matter the trading platform, the ISIN number for that security will remain unchanged worldwide.',
          },
        ],
      },
      {
        title: 'Regulation',
        routes: [
          {
            href: '/exchange/regulation/summary',
            title: 'Regulation Summary',
            description:
              'MERJ Exchange Limited, formerly Trop-X (Seychelles) Limited, is licensed by the Seychelles Financial Services Authority as an operator of a securities exchange. MERJ has published listing rules and market rules which collectively prescribe the regulations governing participation in the markets operated by MERJ. These rules meet the prescribed requirements of the Government of Seychelles prescribed in the Securities Act 2007, as amended. Issuers, Members and other service providers participating in the MERJ ecosystem are also expected to comply with applicable laws including company law and prevailing anti-money laundering legislation in Seychelles or the respective country of the issuer or Member as the case may be.',
          },
          {
            href: '/exchange/regulation/issuer-regulation',
            title: 'Issuer Regulation',
            description:
              'Issuers of securities and other instruments listed on any market operated by MERJ must meet listing rules that prescribe the initial and ongoing obligations of the issuer in order to initial list and thereafter maintain the listing in good standing.',
          },
          {
            href: '/exchange/regulation/member-regulation',
            title: 'Member Regulation',
            description:
              'The Seychelles Securities Act 2007 and subsequent regulations provides a clearly defined legal framework in line with international best practices to underpin regulation of MERJ EXCHANGE markets. The MERJ EXCHANGE Rules and Listing Requirements build upon this legal framework and provide a simplified and clearly defined framework using industry best practice principles. MERJ EXCHANGE operates within an orderly and transparent market structure designed to instill confidence to our Members, participants and the investment community.',
          },
          {
            href: '/exchange/regulation/market-regulation',
            title: 'Market Regulation',
            description:
              'MERJ Members must meet initial and ongoing requirements for Members as laid down by MERJ pursuant to the Market Rules. Members are regulated by the MERJ Regulation Division for such matters as their conduct with clients, trading activities and capital adequacy.',
          },
          {
            href: '/exchange/regulation/aml',
            title: 'AML',
            description:
              'MERJ EXCExchangeHANGE and its Members must adhere applicable law for the prevention of money laundering and terrorist financing. MERJ, the Government of Seychelles and our regulators (Financial Services Authority and Central Bank of Seychelles) are committed to the prevention of money laundering and terrorist financing. Seychelles AML laws and practices are in line with standards established by the Financial Action Task Force, the global standard setting body for prevention of money laundering and terrorist financing. MERJ group companies are “reporting entities” in terms of the Anti-Money Laundering Act.',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    routes: [
      {
        href: '/about/about-merj',
        title: 'MERJ Exchange',
        description:
          'MERJ Exchange is an innovative end-to-end, multi-market global financial exchange for equities, debt and derivatives. MERJ has expanded its capabilities by providing markets and services for security tokens and digital assets.',
      },
      {
        href: '/about/team',
        title: 'Our Team',
        description:
          'The MERJ Exchange senior management comprises a diverse set of knowledge and experience in securities and financial markets operations, trust and corporate services, information technology, investment banking, legal, project management, financial product development, regulation and fund administration.',
      },
      {
        href: '/about/news',
        title: 'News',
        description: "Here you will find all the market related news and what's the latest at MERJ",
      },
      {
        href: "/about/community",
        title: 'MERJ Community',
        description:
          "Here you will find all the market related news and what's the latest at MERJ.",
      },
      {
        href: "/about/investor-relations",
        title: 'Investor Relations',
        description:
          "",
      },
    ],
  },
  {
    title: 'Enquiries',
      routes: [
        {
          title: 'Market',
          routes: [
             {
                href: '/enquiries/market/market-hours',
                title: 'Market Hours',
             },
          ], 
        },
        {
          title: 'General',
          routes: [
              {
                href: '/enquiries/general/faqs',
                title: 'FAQs'
              },
              {
                href: '/enquiries/general/contact',
                title: 'Contact Us',
              },
              {
                href:'/enquiries/general/enquiries',
                title: 'Enquiries',
                description:
      'For Member, issuer and general enquiries please complete the form below and an appropriate staff Member will reply to your query shortly.',
              }
          ],
        }
      ], 
  },
];

module.exports = navRoutes;
