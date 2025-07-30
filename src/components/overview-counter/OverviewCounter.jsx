import React from 'react';
import CountUp from 'react-countup';

const OverviewCounter = () => {
  return (
    <section className='container mx-auto h-12 md:h-32 p-3'>
        <div className='grid grid-cols-4 divide-x divide-slate-700 mx-auto w-full md:max-w-[800px]
        shadow-lg bg-white -translate-y-10 md:-translate-y-16 my-4 md:p-8'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 sm:text-lg md:text-3xl'>
              <CountUp end={20} suffix='+' duration={5}/>
            </h1>
            <p>Clientes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 sm:text-lg md:text-3xl'>
              <CountUp end={20} suffix='+' duration={5}/>
            </h1>
            <p>Clientes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 sm:text-lg md:text-3xl'>
              <CountUp end={20} suffix='+' duration={5}/>
            </h1>
            <p>Clientes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 sm:text-lg md:text-3xl'>
              <CountUp end={20} suffix='+' duration={5}/>
            </h1>
            <p>Clientes</p>
          </div>
        </div>
    </section>
  )
}

export default OverviewCounter