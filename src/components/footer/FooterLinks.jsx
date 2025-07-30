import React from 'react'

const FooterLinks = ({importantLinks}) => {
  return <>
    { importantLinks.map((link) => (
      <li key={link.name} className='cursor-pointer transition-all duration-300 
      hover:translate-x-[2px]'>
        <a href='#'>{link.name}</a>
      </li>  
    ))}
  </>
}

export default FooterLinks