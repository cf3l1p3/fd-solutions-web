import React, { useState } from "react";
import { BiPhoneCall, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi" 
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../../assets/generales/Logo.svg';

const Navbar =  () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
    <header className='fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b[1px] border-primary/50'> 
        <nav className='container mx-auto flex items-center justify-between h-[70px] py-2'>
          {/* Logo Section*/}
          <div className="text-2xl md:text-3xl text-white">
            
            <a href="#">
              {" "} FD
            </a><span className="inline-block font-bold text-primary">&nbsp;Solutions</span>
          </div>
          {/* Desktop menu Section*/}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]"> 
                  Inicio {" "}
                  {/* <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span> */}
                </a>
                {/* Dropdown Section */}
                {/* <div className="absolute -left-9 z-[99999] hidden w-[200px] bg-white shadow-md p-2 
                 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Servicios</li>
                    <li className="p-2 hover:bg-violet-200">Acerca de Nosotros</li>
                    <li className="p-2 hover:bg-violet-200">Politica de Seguridad</li>
                  </ul>
                </div> */}
              </li>
              <li className="group relative cursor-pointer">
                <a href="#servicios" className="flex items-center gap-[2px] h-[72px]"> 
                  Servicios {" "}
                  {/* <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span> */}
                </a>
              </li>
              {/* <li>
                <a href="#" className="flex items-center gap-[2px] h-[72px]"> 
                  Contactanos {" "}
                </a>
              </li> */}
              <li>
                <div className="flex items-center gap-4">
                {/* <div>
                  <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white 
                  hover:bg-primary/90" />
                </div> */}
                <div>
                  <a href="#partners" className="flex items-center gap-[2px] h-[72px]">
                    <p>Partners</p>
                  </a>
                </div>
                <div>
                  <p><a href="#contactanos">Contáctanos</a></p>
                  {/* <p>+56 9 8533 4038</p> */}
                </div>
                </div>
              </li>
              <li>
                {/* Light and dark mode switcher*/}
                {/* <BiSolidSun className="text-2xl"/> */}
              </li>
            </ul>
          </div>

          {/* Mobile menu Section*/}
          <div className="flex items-center gap-5 md:hidden">
            {showMenu ? 
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}>
            </HiMenuAlt1>
            :<HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}>
            </HiMenuAlt3>}
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section */}
      <ResponsiveMenu showMenu={showMenu} />
      </>
  )
}

export default Navbar