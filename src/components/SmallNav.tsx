import Link from "next/link";
import { destination } from "@/constants";
import SubHeading from "./ui/SubHeading";

 
const Nav = () => {
    return (
    <div className="flex flex-row tab:justify-start justify-center">
        <ul className="flex flex-1 tab:justify-start justify-center">
        {destination.map((item, index) => (
            <li
                className={`${index === 0 ? 'ml-0' : 'ml-8'} tracking-[2.7px]`}
                key={index}
            >
              <Link href={`${item.id}`}><SubHeading type={'option'} className="flex flex-row hover-underline-animation">{item.name}</SubHeading></Link>
            </li>
        ))}
        </ul>
      </div>
    );
}
 
export default Nav;