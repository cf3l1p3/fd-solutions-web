import React from 'react'

const BlogCard = ({Img}) => {
  return (
    <>
    <div className='p-4 shadow-lg'>
      <div className='overflow-hidden'>
        <img 
          src={Img}
          alt=''
          className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 
          hover:scale-110'/>
      </div>
      <div className='flex justify-between pt-2 text-slate-600'>
        <p>Abril 2025</p>
        <p className='line-clamp-1'>By Felipe</p>
      </div>
      <div className='space-y-2 py-3'>
        <h1 className='line-clamp-1 font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        </h1>
        <p className='line-clamp-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam, praesentium earum eveniet delectus eos repellat. Dolores facilis autem reiciendis exercitationem perspiciatis facere soluta iusto fuga rem. Quia, magni sed?
        </p>
      </div>
    </div>

    </>
  )
}

export default BlogCard