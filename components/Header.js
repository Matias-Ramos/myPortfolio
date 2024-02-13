import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return(
    <header className='absolute z-30 w-full flex items-center px-1 xs:px-0 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row xs:flex-col justify-between items-center gap-y-6 xs:gap-y-2 py-8'>
          <Link href={"/"}>
            <div className='w-auto h-[48px] text-4xl'>
              <span className='font-bold'>
                matias {" "}
              </span>
              <span className='font-thin'>
                ramos
              </span>
              <span className='text-accent'>.</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
