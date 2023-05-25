import { Bellefair, Barlow } from 'next/font/google'
import Link from 'next/link';

import { homeBgDesktop, homeBgMobile, homeBgTablet } from '@/assets';
import { hero } from '@/constants'
import Paragraph from './ui/Paragraph'
import SubHeading from '@/ui/SubHeading'
import Heading from '@/ui/LargeHeading'
import Navbar from './Navbar'
import BG from './BG'

const bellefair = Bellefair({ subsets: ['latin'], weight: ['400']})
const barlow = Barlow({ subsets: ['latin'], weight: ['400']})

const [{ title, subtitle }] = hero;

const Mainpage = () => {
  return (
    <div className="">
      <BG desktop={homeBgDesktop} tablet={homeBgTablet} mobile={homeBgMobile}/>
      <Navbar />
      
      <div className="mob:mx-40 mx-8 tab:mt-64 mt-12 mob:mt-32 flex tab:justify-between justify-center items-center tab:flex-row flex-col">
        <div className="mob:max-w-[450px] max-w-[327px] tab:text-left text-center">
          <SubHeading className="tracking-[4.72px]">{title}</SubHeading>
          <Heading className={`uppercase ${bellefair.className} my-6`}>Space</Heading>
          <Paragraph className={`${barlow.className}`}>{subtitle}</Paragraph>
        </div>
        <div className="relative z-0 tab:h-[450px] tab:w-[450px] mob:h-[390px] mob:w-[390px] h-[250px] w-[250px] rounded-full bg-white bg-opacity-0 tab:mt-0 mob:mt-4 mt-1 hover:bg-opacity-10 flex justify-center items-center">
          <div className="absolute flex justify-center items-center">
            <div className="mob:w-[274px] mob:h-[274px] w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <Link href="/destination">
                <Heading type={'cta'} className={`uppercase text-black ${bellefair.className} tracking-[2px]`}>Explore</Heading>
              </Link>
            </div>  
          </div>
        </div>
        {/* <div className="w-[450px] h-[450px] bg-white rounded-full opacity-10 flex items-center justify-center cursor-pointer mt-16 z-[-1]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div> */}
      </div>
    </div>
  )
}

export default Mainpage