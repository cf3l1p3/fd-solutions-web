import React from 'react'

export const ResponsiveMenu = ({showMenu}) => {
  return (
    <div 
      className={`${showMenu ? "left-0" : "-left-[100%]"} h-screen bg-navbar w-[100%] fixed top-0 z-50
      transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white`}>
      <div>
        <nav className='mt-12'>
          <ul className='space-y-4 text-xl'>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href='#servicios'>Servicios</a>
            </li>
            <li>
              <a href='#partners'>Partners</a>
            </li>
            <li>
              <a href='#contactanos'>Contactanos</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='footer'>
        <h1>© 2025, FD Solutions SpA</h1>
      </div>
    </div>
  )
};

export default ResponsiveMenu;