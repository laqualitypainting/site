import Link from "next/link";
import Layout from "../components/layout";
import Yugecard from "../components/yugecard";

function Gallery() {
  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto">
              <Yugecard/>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Gallery;
