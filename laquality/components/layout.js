import Link from "next/link";
import Nav from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

export const siteTitle = "L.A. Quality Painting";

export default function Layout({ children, home }) {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <Nav />
      <div className="container min-h-screen bg-slate-900 mx-auto p-4 text-center">
        {home ? (
          <>{/* This layout is for the home page */}</>
        ) : (
          <>{/* This is a top layout for pages other than home */}</>
        )}
        {/* This is a bottom layout for pages other than home */}
        <main className="bg-slate-900">{children}</main>
        {!home && (
          <div className="pt-8 text-left">
            <Link href="/">
              <a className="text-white">
                <span className="text-white text-3xl"> ← </span>Back to
                Home
              </a>
            </Link>
          </div>
        )}
      </div>
      {/* Everything after here will be at the bottom ALL pages */}
      <Footer />
    </div>
  );
}
