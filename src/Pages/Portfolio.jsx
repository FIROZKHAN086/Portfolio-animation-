import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

const Portfolio = () => {
  const sectref = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each project card individually
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, translateX: 100 }, // Starting values
        {
          opacity: 1,
          translateX: 0, // Ending values
          duration: 1,
          delay:0.89,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Adjust the start point as needed
            end: "top 70%", // Optional, defines the end point of the animation
           
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      image: "https://static.wixstatic.com/media/11062b_b35e39e734284486a1293ef3c6a3145b~mv2.jpg",
      title: "Zomato Clone",
      rating: 5,
    },
    {
      image: "https://wallpapers.com/images/hd/music-4k-doodle-fhosgwe4adxuunwq.jpg",
      title: "Music App",
      rating: 4,
    },
    {
      image: "https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=",
      title: "Calculator",
      rating: 5,
    },
    {
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Food Website",
      rating: 3,
    },
  ];

  return (
    <section ref={sectref} className="bg-zinc-500 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)} // Assign each card to the ref array
              key={index}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                rating={project.rating}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
