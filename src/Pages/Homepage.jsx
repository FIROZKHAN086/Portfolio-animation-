import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
import React, { useEffect, useRef } from "react";


function Homepage() {
  const homeref = useRef()
  const inref = useRef()
  const buttonref = useRef()
  const deref = useRef()

  useEffect(() => {
    gsap.from(homeref.current, {
      opacity:0.1,
      translateX:100,
      backgroundColor:'white',
    }),
    gsap.to(homeref.current, {
      duration:3,
      delay:1,
      opacity:1,
      translateX:-200,
      backgroundColor:'black',
      width:'100%',
      translateX:0,
     
    }),
    gsap.from(inref.current, {
      opacity:0,
      translateY:200
    }),
    gsap.to(inref.current,{
      delay:3,
      opacity:1,
      duration:2,
      translateY:0

    }),
    gsap.from(buttonref.current, {
      opacity:0,
      translateX:500,
      translateY:500,
      translateZ:500,
    }),
    gsap.to(buttonref.current, {
      delay:4,
      opacity:1,
      translateX:0,
      translateY:0,
      translateZ:0,

    }),
    gsap.from(deref.current, {
        opacity:0,
        translateX:1000,
        scale:0,
      }),
      gsap.to(deref.current, {
        opacity:1,
        delay:5,
        duration:2,
        translateX:0,
        scale:1,
    })
    
   
}, [])
  

  return (
    <section
    ref={homeref}
      id="home"
      className="main bg-black text-white min-h-screen flex flex-col justify-center items-center px-8"
    >
      <div ref={inref} className="max-w-4xl text-center">
        <p className="text-gray-400 text-lg">Hi, I am</p>
        <h1 className="text-5xl font-bold text-white mt-2">FIROZ KHAN</h1>
        <h2 className="text-4xl font-bold text-orange-500 mt-4 uppercase">
          Web Developer
        </h2>
        <div className="flex justify-center space-x-4 mt-6 text-gray-300 text-2xl">
          <a href="#facebook" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#linkedin" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#behance" className="hover:text-white">
            <i className="fab fa-behance"></i>
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <button ref={buttonref} className="bg-orange-500 text-black py-2 px-6 rounded-lg hover:bg-orange-600">
            <a href="mailto:firozkhan192006@gmail.com">Hire Me</a>
          </button>
          {/* Download CV Button */}
          <a
          ref={buttonref}
            href="/Firoz_Khan_CV.pdf" // Path to your CV in the public folder
            download="Firoz_Khan_CV.pdf" // Suggested download file name
            className="border border-orange-500 text-orange-500 py-2 px-6 rounded-lg hover:bg-orange-500 hover:text-black text-center"
          >
            Download CV
          </a>
        </div>
        <div ref={deref} className="flex justify-around mt-12">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">5+</h3>
            <p className="text-gray-400">Experiences</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">20+</h3>
            <p className="text-gray-400">Projects done</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">80+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
