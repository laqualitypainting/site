import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Painting company Huntsville, AL" />
        <link rel="canonical" href="https://laqualitypainting.com/"></link>
        <meta property="og:title" content="L.A Quality Painting" />
        <meta property="og:site_name" content="L.A Quality Painting"></meta>
        <meta property="og:url" content="https://laqualitypainting.com/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:title" content="L.A Quality Painting"></meta>
        <meta name="twitter:url" content="https://laqualitypainting.com/"></meta>
        <NextSeo
        title="L.A Quality Painting"
        titleTemplate="L.A Quality Painting | Next SEO"
        description="Painting company Huntsville, AL"
        canonical="https://laqualitypainting.com/"
        />
      </Head>
    </>
  );
}
