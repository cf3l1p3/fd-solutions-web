import React from 'react'
import Imagen from '../../assets/Licenciamiento.jpg'

const BannerDetails = ({reverse}) => {
  return (
    <section id='servicios' className='bg-slate-100'>
      <div className='container mx-auto flex flex-col items-center justify-center py-10 cd:h-[500px]'>
        <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
          {/* Text Container */}
          <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true" 
            className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left
            ${ reverse ? "md:order-last" : "" }`}>
            <h1 className='font-bold'>
              Licenciamiento de Software
            </h1>
            <p>
              Impulsa tu productividad con soluciones de licenciamiento eficientes y flexibles.
              Ofrecemos servicios de venta y gestión de licencias de software para herramientas líderes del mercado, adaptadas a las necesidades de empresas, instituciones educativas y organismos gubernamentales.
            </p>
            <p>
              Nos enfocamos en simplificar todo el proceso de adquisición y gestión de software, para que tú puedas enfocarte en hacer crecer tu organización.
            </p>
          </div>
          {/* Image Container */}
          <div 
            data-aos="fade-left"
            data-aos-duration="400"
            className={reverse ? "order-1" : ""}>
            <img src={Imagen} alt='not found' className='mx-auto w-full p-4 max-w-[400px]'>
            </img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDetails