import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/aditya07879" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/07879adityatomar/" },
  { icon: <FaXTwitter />, path: "https://x.com/aditya_tmr24" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/adityatomar_______/" },
  { icon: <SiHashnode />, path: "https://hashnode.com/@aditya07879" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};


export default Socials
