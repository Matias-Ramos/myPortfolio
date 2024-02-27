// Components
import Nav from "./nav/Nav";
import Header from "./header/Header";
import TopLeftImg from "./TopLeftImg";

// Font settings
import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// Styles
const containerStyle = `page text-white bg-site bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto xl:overflow-y-hidden
`


const Layout = ({ children }) => (
  <div className={containerStyle}>
    <TopLeftImg />
    <Header />
    {children}
    <Nav />
  </div>
)
export default Layout;
