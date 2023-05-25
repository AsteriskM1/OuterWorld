import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Barlow, Bellefair } from "next/font/google";

import { techBgDesktop, techBgTablet, techBgMobile, launchV, launchVehSm } from "@/assets";
import BG from "@/components/BG";
import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import SubHeading from "@/components/ui/SubHeading";
import { technology } from "@/constants";

const bellefair = Bellefair({ subsets: ['latin'], weight: ['400']})
const barlow = Barlow({ subsets: ['latin'], weight: ['400']})

export const metadata: Metadata = {
    title: 'OuterWorld | Technology',
    description: 'Come explore the world beyond with us!',
}

const [{ name, description }] = technology;

const LaunchVehicle = () => {
  return (
    <div className={``}>
      <BG desktop={techBgDesktop} tablet={techBgTablet} mobile={techBgMobile} />
      <Navbar />
      <div className="tab:mx-40 mob:mx-12 mx-auto tab:mt-[5.5rem] mob:mt-6">
        <div className="absolute right-0 mt-7 tab:flex hidden z-[-1]">
          <Image src={launchV} alt="image of a rocket taking off" className=""/>
        </div>
        <div>
          <SubHeading type={"title"} className="uppercase flex flex-row tracking-[4.72px] max-mob:justify-center max-mob:mt-6"><span className="font-bold mr-4 opacity-25">03</span>SPACE LAUNCH 101</SubHeading>
        </div>
        <div className="absolute tab:mt-7 mob:mt-14 mt-8 max-tab:flex hidden left-0 z-[-1]">
          <Image src={launchVehSm} alt="image of a rocket taking off" className="relative"/>
        </div>
        <div className="tab:mt-32 flex flex-row mob:mt-[28rem] mt-56 max-tab:flex-col">
          <div className="flex tab:flex-col max-tab:flex-row max-tab:items-center max-tab:justify-between max-tab:w-[210px] max-mob:w-[152px] max-tab:self-center">
            <Link href="/technology" className="tab:w-[80px] tab:h-[80px] mob:w-[60px] mob:h-[60px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer">
              <p className={`${bellefair.className} tab:text-[32px] tab:tracking-[2px] tab:leading-[37px] mob:text-[24px] mob:tracking-[1.5px] mob:leading-[27.5px] text-[16px] tracking-[1px] leading-[18px] text-black`}>1</p>
            </Link>
            <Link href="/technology/port" className="tab:w-[80px] tab:h-[80px] mob:w-[60px] mob:h-[60px] w-[40px] h-[40px] rounded-full border-[1px] tab:mt-6 flex items-center justify-center cursor-pointer border-[#fff] border-opacity-25 hover:border-opacity-100">
              <p className={`${bellefair.className} tab:text-[32px] tab:tracking-[2px] tab:leading-[37px] mob:text-[24px] mob:tracking-[1.5px] mob:leading-[27.5px] text-[16px] tracking-[1px] leading-[18px] text-white`}>2</p>
            </Link>
            <Link href="/technology/capsule" className="tab:w-[80px] tab:h-[80px] mob:w-[60px] mob:h-[60px] w-[40px] h-[40px] rounded-full border-[1px] tab:mt-6 flex items-center justify-center cursor-pointer border-[#fff] border-opacity-25 hover:border-opacity-100">
              <p className={`${bellefair.className} tab:text-[32px] tab:tracking-[2px] tab:leading-[37px] mob:text-[24px] mob:tracking-[1.5px] mob:leading-[27.5px] text-[16px] tracking-[1px] leading-[18px] text-white`}>3</p>
            </Link>
          </div>
          <div className="flex flex-col tab:ml-20 tab:mt-0 mob:mt-12 mt-6 max-tab:justify-center max-tab:text-center">
            <Paragraph type={"term"} className="uppercase text-[#D0D6F9]">THE TERMINOLOGY…</Paragraph>
            <Heading type={"heading3"} className={`${bellefair.className} uppercase mt-3`}>{name}</Heading>
            <Paragraph className={`${barlow.className} text-[#D0D6F9] mob:w-[444px] w-[327px] mt-4 max-tab:mx-auto`}>{description}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchVehicle