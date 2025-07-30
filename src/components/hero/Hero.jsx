import React from "react";
import Imagen from '../../assets/Hero.png'

const Hero = () => {
    return (
      <div className="h-[650px] md:h-[500px] bg-navbar pt-20">
        <section className="container mx-auto flex flex-col items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
            {/* Hero Text Container */}
            <div 
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
              <h1 className="text-4xl">Impulsamos tu transformación digital</h1>
              <p>En FD Solutions, conectamos innovación y eficiencia. Somos especialistas en soluciones tecnológicas, licenciamiento de software y servicios IT para empresas públicas y privadas.
              </p>
              <p>Soluciones confiables. Soporte cercano. Resultados reales.</p>
              <div className="space-x-4">
                <button className="btn btn-primary">Comencémos...</button>
                {/* <button className="btn btn-outline">Get Started</button> */}
              </div>
            </div>
            {/* Hero Image Container */}
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true" 
              className="mx-auto max-w-xs p-5">
              <img src={Imagen} alt="NotFound" className="max-h-full" />
            </div>
          </div>
        </section>
      </div>
    )
};

export default Hero;