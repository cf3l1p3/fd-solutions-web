import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import OverviewCounter from './components/overview-counter/OverviewCounter';
import BannerDetails from './components/banner-details/BannerDetails';
import SimpleBannner from './components/simple-banner/SimpleBannner';
import Blogs from './components/blogs/Blogs';
import AOS from 'aos';
import "aos/dist/aos.css"
import SimpleBannnerAdobe from './components/simple-banner/SimpleBannnerAdobe';
import ContactUs from './components/contact-us/ContactUs';


function App() {
  useEffect(() => {
    AOS.init (
      {
        offset:100,
        duration:500,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
  }, []
)

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      {/* <OverviewCounter /> */}
      <BannerDetails />
      <SimpleBannnerAdobe />
      {/* <BannerDetails reverse={ true } /> */}
      {/* <SimpleBannner /> */}
      {/* <Blogs /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App
