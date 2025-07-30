import React from 'react'
import BlogCard from './BlogCard'
import img1 from '../../assets/blogs/image.png'

const Blogs = () => {
  return (
    <>
    <section
      data-aos="fade-up" 
      className='container mx-auto mb-10 py-8'>
      <h1 className='mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold'>
        Últimos Blogs
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <BlogCard Img={img1} />
        <BlogCard Img={img1} />
        <BlogCard Img={img1} />
      </div>
      <p></p>

    </section>
  </>
  )
}

export default Blogs