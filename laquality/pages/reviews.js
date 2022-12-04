import Layout from "../components/layout";
import Link from "next/link";

export default function Reviews() {
  return (
    <Layout>
      <p className="text-white">
        <span className="hover:text-blue-300 underline">
            <Link href="https://g.page/r/CW37RAnlbvn0EBI/review">
                Leave us a review!
            </Link>
        </span>
        </p>
    </Layout>
  );
}
