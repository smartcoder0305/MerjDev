import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { app, SEO } from '../config';

/* eslint-disable no-tabs  */
/* eslint-disable react/no-danger */
const schema = `{
	"@context": "http://schema.org",
	"@type": "LocalBusiness",
	"name": "${SEO.title}",
  "description": "${SEO.description}",
  "openingHours": "${SEO.richText.openingHours}",
	"image": "${SEO.openGraph.image}",
	"logo": "${SEO.openGraph.image}",
	"url": "${SEO.openGraph.url}",
	"telephone": "${app.contact.telephone}",
  "sameAs": ["https://twitter.com/${SEO.twitter.handle.replace('@', '')}"],
  "email": "${app.contact.emailAddress}",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "${SEO.richText.streetAddress}",
		"addressLocality": "${SEO.richText.addressLocality}",
		"postalCode": "${SEO.richText.postalCode}",
		"addressCountry": "${SEO.richText.addressCountry}"
  },
  "priceRange": "${SEO.richText.priceRange}"
}`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head >
          <meta name="google-site-verification" content="Aw5lGOlBLlNigocqaOIAZePUFM8hLx1tOkpXHXBjE0I" />
          
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THCQTQ2" height="0" width="0"  style={{ display:'none',visibility:'hidden' } }></iframe>
          </noscript>
          <Main />

          <NextScript />
        </body>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      </html>
    );
  }
}
