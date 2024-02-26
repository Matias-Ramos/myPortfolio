// Components
import Link from 'next/link';
import Socials from './Socials';
// Style
const headerStyle = `
relative z-10 w-full flex items-center px-1 xs:px-0
bg-primary/60 bg-gradient-to-r from-primary/10 via-black/30 to-black/10
xl:px-0 xl:h-[90px]
`;
const containerStyle = "container mx-auto";
const innerCtStyle = 'flex xs:flex-col sm:flex-row  justify-between items-center gap-y-6 xs:gap-y-2 py-8';
const linkCtStyle = 'w-auto h-[48px] text-4xl'

const Header = () => (
  <header className={headerStyle}>
    <div className={containerStyle}>
      <div className={innerCtStyle}>

        <Link href={"/"}>
          <div className={linkCtStyle}>
            <span className='font-bold'>matias {" "}</span>
            <span className='font-thin'>ramos</span>
            <span className='text-accent'>.</span>
          </div>
        </Link>
        <Socials />

      </div>
    </div>
  </header>
)

export default Header;
