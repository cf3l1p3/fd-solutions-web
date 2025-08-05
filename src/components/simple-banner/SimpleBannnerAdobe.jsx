import React from 'react'
import Imagen from '../../assets/adobe/Channel_Partner_badges_Adobe_Registered_Reseller_white.png'

const SimpleBannnerAdobe = () => {
  return (
    <div id="partners" className='bg-primary'>
      <div
        data-aos="fade-up" 
        className='container mx-auto py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8' >
          <div className='px-2 max-w-[400px]'>
            <img src={Imagen}/>         
          </div>
          <div className='flex flex-col items-center gap-4 text-center text-white md:col-span-2 
          md:items-start md:text-left'>
            <h1 className='text-3xl font-bold'>
            
            </h1>
            <p>Socio oficial en soluciones Adobe.</p>
            <p>Como Partner Registered de Adobe, te ofrecemos asesoría y gestión de licencias para herramientas líderes como Creative Cloud, Acrobat y más. </p>
            <p>Confía en un canal autorizado para adquirir tus productos con respaldo profesional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleBannnerAdobe