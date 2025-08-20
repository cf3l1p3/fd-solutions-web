import React from "react";
import Imagen from '../../assets/Hero.png'

const Hero = () => {
    return (
      <div className="bg-navbar">
        <section className="container mx-auto flex flex-col items-center justify-center py-10 cd:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 text-white">
            {/* Hero Text Container */}
            <div 
              data-aos="fade-right"
              data-aos-duration="500"
              // data-aos-once="true"
              className="flex flex-col items-start gap-4 text-center  md:items-start md:p-8 md:text-left">
              <h1 className="text-4xl font-bold">Impulsamos tu transformación digital</h1>
              <p>En FD Solutions, conectamos innovación y eficiencia. Somos especialistas en soluciones tecnológicas, licenciamiento de software y servicios IT para empresas públicas y privadas.
              </p>
              <p>Soluciones confiables. Soporte cercano. Resultados reales.</p>
              <div className="space-x-4">
                <a href="#contactanos">
                <button className="btn btn-primary cursor-pointer">Contáctanos</button>
                </a>
                {/* <button className="btn btn-outline">Get Started</button> */}
              </div>
            </div>
            {/* Hero Image Container */}
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              // data-aos-once="true" 
              className="mx-auto max-w-xs p-5">
              <img src={Imagen} alt="NotFound" className="mx-auto p-4 max-w-[400px]" />
            </div>
          </div>
        </section>
      </div>
    )
};

export default Hero;