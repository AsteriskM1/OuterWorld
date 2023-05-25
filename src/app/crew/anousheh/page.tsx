import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Barlow, Bellefair } from "next/font/google";

import { crewBgDesktop, crewBgTablet, crewBgMobile, anousheh } from "@/assets";
import BG from "@/components/BG";
import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import SubHeading from "@/components/ui/SubHeading";
import { crew } from "@/constants";

const bellefair = Bellefair({ subsets: ['latin'], weight: ['400']})
const barlow = Barlow({ subsets: ['latin'], weight: ['400']})

export const metadata: Metadata = {
    title: 'OuterWorld | Crew',
    description: 'Come explore the world beyond with us!',
}

const [, , , { name, role, bio }] = crew;

const Anousheh = () => {
  return (
    <div className={``}>
      <BG desktop={crewBgDesktop} tablet={crewBgTablet} mobile={crewBgMobile} />
      <Navbar />
      <div className="tab:mx-40 mob:mx-12 mx-auto tab:mt-[5.5rem] mob:mt-6 flex tab:flex-row flex-col tab:justify-between justify-center">
        <div>
          <SubHeading type={"title"} className="uppercase flex flex-row tracking-[4.72px] max-mob:justify-center max-mob:mt-6"><span className="font-bold mr-4 opacity-25">02</span>Meet your crew</SubHeading>
          <div className="mob:hidden mt-6 flex justify-center">
            <Image src={anousheh} alt="picture of a person" className="w-[154px] h-[222px]" />
          </div>
          <div className="h-[1px] w-[327px] mx-auto mob:hidden bg-[#383B4B] z-10"/>
          <div className="tab:mt-32 mob:mt-10 mt-8 max-tab:text-center flex flex-col max-tab:justify-center">
            <div className="max-mob:order-last max-mob:mt-8">
              <Heading type={"title"} className={`${bellefair.className} uppercase opacity-50`}>{role}</Heading>
              <Heading type={"heading3"} className={`${bellefair.className} uppercase tab:mt-4 mt-2`}>{name}</Heading>
              <div className="max-tab:flex max-tab:justify-center">
                <Paragraph className={`${barlow.className} tab:mt-6 mt-4 text-[#D0D6F9] tab:w-[444px] mob:w-[536px] w-[327px]`}>{bio}</Paragraph>
              </div>
            </div>
            <div className="tab:mt-16 mob:mt-10 flex flex-row max-tab:justify-center max-mob:order-first">
              <Link href="/crew" className="w-[15px] h-[15px] rounded-full bg-white opacity-[0.17] mr-6 hover:bg-[#85868b]" />
              <Link href="/crew/mark" className="w-[15px] h-[15px] rounded-full bg-white opacity-[0.17] mr-6 hover:bg-[#85868b]" />
              <Link href="/crew/victor" className="w-[15px] h-[15px] rounded-full bg-white opacity-[0.17] mr-6 hover:bg-[#85868b]" />
              <Link href="/crew/anousheh" className="w-[15px] h-[15px] rounded-full bg-white hover:bg-[#85868b]" />
            </div>
          </div>
        </div>
        <div className="tab:mt-28 mob:mt-[4.5rem] max-tab:mx-auto mob:flex hidden">
          <Image src={anousheh} alt="picture of a person" className="tab:w-auto tab:h-auto mob:w-[433px] mob:h-[532px] w-[226px] h-[223px]" />
        </div>
      </div>
    </div>
  )
}

export default Anousheh