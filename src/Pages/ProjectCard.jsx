import React from "react";

const ProjectCard = ({ image, title, rating, link }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <i
              key={index}
              className={`fas fa-star ${
                index < rating ? "text-orange-500" : "text-gray-500"
              }`}
            ></i>
          ))}
        </div>
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
