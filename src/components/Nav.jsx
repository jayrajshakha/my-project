import React, { useEffect, useState } from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";

const Nav = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
             window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        });
    })

  return (
    <header className={`w-full ${isActive ? 'shadow-md bg-white' : '' } z-10   padding-x py-8`}>
      <nav className="flex justify-between items-center max-contain">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className=" flex flex-1 gap-16 justify-center items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
