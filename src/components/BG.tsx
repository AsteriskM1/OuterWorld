"use client"

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
};

const BG = ({ desktop, tablet, mobile }: Props) => {
  const [width, setWidth] = useState(0);
  const mobilebp = 376;
  const tabbp = 769;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {width > tabbp ? (
        <Image
          src={desktop}
          alt="picture of Earth from outerspace"
          priority
          quality={100}
          className="w-full object-cover absolute top-0 left-0 z-[-10]"
        />
      ) : width > mobilebp ? (
        <Image
          src={tablet}
          alt="picture of Earth from outerspace"
          priority
          quality={100}
          className="w-full object-cover absolute top-0 left-0 z-[-10]"
        />
      ) : (
        <Image
          src={mobile}
          alt="picture of Earth from outerspace"
          priority
          quality={100}
          className="w-full object-cover absolute top-0 left-0 z-[-10]"
        />
      )}
    </>
  );
};

export default BG;