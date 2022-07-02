import { siteTitle } from '../components/layout';

export default function Footer() {
  return (
    <div className='bg-black'>
      <footer className="mt-32 text-white bg-slate-900 border-t body-font">
        <div className="grid grid-cols-2">
          <div className="container flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center text-base">
              <p className="mr-5 text-sm text-center">© {siteTitle} 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}