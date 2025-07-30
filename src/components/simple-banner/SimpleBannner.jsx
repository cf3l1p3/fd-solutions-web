import React from 'react'

const SimpleBannner = () => {
  return (
    <div className='bg-primary'>
      <div
        data-aos="fade-up" 
        className='container mx-auto py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8' >
          <div className='px-2 max-w-[400px]'>
            <iframe 
            className='aspect-video w-full'
            src="https://www.youtube.com/embed/3mQ7aVnnGRU" 
            title="Adobe Firefly | The World is What You Make It" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
          </div>
          <div className='flex flex-col items-center gap-4 text-center text-white md:col-span-2 
          md:items-start md:text-left'>
            <h1 className='text-3xl font-bold'>
            Discover Adobe
            </h1>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur earum quis tempora 
            necessitatibus perferendis, provident omnis illum aliquid, explicabo ut at quod nam 
            commodi quibusdam nostrum, enim vitae eum blanditiis?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleBannner