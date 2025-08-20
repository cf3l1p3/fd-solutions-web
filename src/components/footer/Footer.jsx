import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow} from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'
import FooterLinks from './FooterLinks'
import Logo from '../../../public/logo-full-black.png';

const Footer = () => {

  const importantLinks = [
    
    {name: "Servicios", link:"#servicios", target:"_self",},
    {name: "Partners", link:"#partners",target:"_self",},
    {name: "Contactanos", link:"#contactanos",target:"_self",},
  ]

    const links = [
    {name: "Adobe", link:"https://www.adobe.com/cl/", target:"_blank",},
    // {name: "Servicios",},
    // {name: "Partners",},
    // {name: "Acerca de Nosotros",}
  ]

  return (
    <>
      {/* <footer className=' text-white rounded-t-3xl bd-gradient-to-r from-cyan-950 to  */}
      {/* to-cyan-900'></> */}
      <footer className='bg-navbar text-white  '>
        <div className='container mx-auto max-w-[1200px] p-4'>
          {/*Footer contain section*/}
          <div className='grid py-5 md:grid-cols-3'>
            <div className='px-4 py-8 relative'>
              <a href="#">
                <img src={Logo} className="p-1 max-w-[120px] absolute top-0"/>
              </a>
              <br />
              <br />
              <br />

              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam soluta earum qui. 
              </p> */}
              
               <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>La Florida, Santiago</p>
              </div>
              <br />
              <div className='flex items-center gap-3'>
                <IoMailSharp/>
                <a href='mailto:contacto@fdsolutions.cl'>contacto@fdsolutions.cl</a>
              </div>
             
              {/* <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+56 9 8533 4038</p>
              </div> */}
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
              <div className='px-4 py-8'>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                  Navegación
                </h1>
                <ul className='flex flex-col gap-3'>
                  <FooterLinks importantLinks={importantLinks}/>         
                </ul>
              </div>
              <div className='px-4 py-8'>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                  Partners
                </h1>
                <ul className='flex flex-col gap-3'>
                  <FooterLinks importantLinks={links}/>         
                </ul>
              </div>
              <div className='px-4 py-8'>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                  Social media
                </h1>
                <div className='flex flex-col gap-3'>
                  {/* <h1>Suscribete a nuestro Newsletter</h1>
                  <input type='text' placeholder='Ingrese su e-mail' className='rounded-full 
                  px-3 py-1 text-black focus:border-white-500 focus:outline-none focus:ring-2
                  focus:ring-sky-500 bg-white'/> */}
                  <div className='flex gap-3 mt-6 items-center'>
                    <a href='#' className='duration-200 hover:scale-150'><FaInstagram className='text-3xl'/></a>
                    <a href='#' className='duration-200 hover:scale-150'><FaFacebook className='text-3xl'/></a>
                    <a href='#' className='duration-200 hover:scale-150'><FaLinkedin className='text-3xl'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
            
          </div>
          {/*Footer Copiright section*/}
          <div className='bottom-footer'>
            <p className='border-t-2 border-gray-300/50 py-6 text-center'>
              © 2025, FD Solutions SpA
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer