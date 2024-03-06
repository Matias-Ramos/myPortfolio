import '../styles/globals.css';
// Components
import Layout from '../components/Layout';
import Transition from "../components/Transition";
// Router
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion";
// Styles 
const mainBckgStyle = `
flex color-fusion bg-primary/30 
xl:h-full items-center justify-center xl:pt-[90px]`

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
