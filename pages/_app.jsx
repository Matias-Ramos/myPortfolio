import '../styles/globals.css';
// Components
import Layout from '../components/Layout';
import Transition from "../components/Transition";
// Router
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion";
// Styles 
const mainBckgStyle = "xl:h-full bg-primary/60 bg-gradient-to-r from-primary/10 via-black/30 to-black/10"

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.main key={router.route} className={mainBckgStyle}>
          <Transition />
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
