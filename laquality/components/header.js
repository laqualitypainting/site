import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="L.A. Quality Painting" />
        <meta property="og:site_name" content="L.A. Quality Painting"></meta>
        <meta property="og:url" content="https://laqualitypainting.com/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}
