import Layout from "../components/layout";
import Aboot from "../components/aboot";
import { motion } from "framer-motion";

function About() {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <Aboot>
        </Aboot>
      </motion.div>
    </Layout>
  );
}
export default About;
