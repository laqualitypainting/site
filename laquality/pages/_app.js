import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="L.A. Quality Painting"
        titleTemplate="L.A. Quality Painting"
        defaultTitle="L.A. Quality Painting"
        description="Painting company serving Huntsville, AL and surrounding areas"
        canonical="https://laqualitypainting.com/"
        openGraph={{
          url: "https://www.laqualitypainting.com/",
          title: "L.A. Quality Painting",
          description: "Painting company serving Huntsville, AL and surrounding areas",
          site_name: "L.A. Quality Painting",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
