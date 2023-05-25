import { Metadata } from "next";
import { Barlow, Bellefair } from "next/font/google";
import Image from "next/image";

import { destBgDesktop, destBgTablet, destBgMobile, mars } from "@/assets";
import BG from "@/components/BG";
import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/LargeHeading";
import { destination } from "@/constants";
import SubHeading from "@/components/ui/SubHeading";
import Paragraph from "@/components/ui/Paragraph";
import Nav from "@/components/SmallNav";

const bellefair = Bellefair({ subsets: ['latin'], weight: ['400']})
const barlow = Barlow({ subsets: ['latin'], weight: ['400']})

export const metadata: Metadata = {
    title: 'OuterWorld | Destination | Mars',
    description: 'Come explore the world beyond with us!',
}

const [, secondDestination] = destination;

const Mars = () => {
  return (
    <div className={``}>
      <BG desktop={destBgDesktop} tablet={destBgTablet} mobile={destBgMobile} />
      <Navbar />
      <div className="tab:mx-40 mob:mx-12 mx-auto tab:mt-[5.5rem] mob:mt-6">
        <SubHeading type={"title"} className="uppercase flex flex-row tracking-[4.72px] max-mob:justify-center max-mob:mt-6"><span className="font-bold mr-4 opacity-25">01</span>Pick your destination</SubHeading>
        <div className="mt-14 max-mob:mt-4 flex tab:flex-row flex-col justify-between">
          <div className="tab:ml-16 mx-auto">
            <Image src={mars} alt="a picture of a moon" className="tab:w-[445px] tab:h-[445px] mob:w-[300px] mob:h-[300px] w-[170px] h-[170px]"/>
          </div>
          <div className="flex flex-col tab:max-w-[445px] tab:mt-0 mob:mt-14 mt-6 tab:text-left text-center max-tab:justify-center">
            <Nav />
            <div className="">
                <Heading type={"heading2"} className={`${bellefair.className} uppercase mob:mt-8 mt-6`}>{secondDestination.name}</Heading>
                <Paragraph className={`${barlow.className} mob:mt-3 mt-2 max-mob:mx-6`}>{secondDestination.description}</Paragraph>
                <div className="h-[1px] bg-[#383B4B] mob:w-full relative mt-12 max-mob:mx-6" />
                <div className="flex mob:flex-row flex-col justify-center tab:justify-start">
                  <div className="flex flex-col mob:mt-6 mt-7">
                    <SubHeading type={"stats"} className="uppercase tracking-[2.3625px] text-[#D0D6F9]">AVG. DISTANCE</SubHeading>
                    <Heading type={"distance"} className="mt-2 uppercase">{secondDestination.distance}</Heading>
                  </div>
                  <div className="flex flex-col mob:mt-6 mt-7 mob:ml-24">
                    <SubHeading type={"stats"} className="uppercase tracking-[2.3625px] text-[#D0D6F9]">Est. travel time</SubHeading>
                    <Heading type={"distance"} className="mt-2 uppercase">{secondDestination.travel}</Heading>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mars