import React from "react";
import Logo from "./assets/bad.png";
import "./App.css";
import Saiyam from "./assets/saiyam.png";
import Sonal from "./assets/sonal.png";
import Naina from "./assets/naina.png";
import Janvi from "./assets/janvi.png";
import Ronak from "./assets/ronak.png";



const TeamPage = () => {
  const teamMembers = [
    {
      name: "Ronak Jain",
      role: "College Relation Manager",
      image: Ronak,
      style: { left: "21%", bottom: "0px", height: "290px", zIndex: 1 },
    },
    {
      name: "Naina Dugar",
      role: "Master of Ceremonies",
      image: Naina,
      style: { left: "38%", bottom: "0px", height: "340px", zIndex: 2 },
    },
    {
      name: "Saiyam Kumar",
      role: "Co-Founder",
      image: Saiyam,
      style: {
        left: "55%",
        bottom: "0px",
        height: "380px",
        zIndex: 3,
      },
    },
    {
      name: "Sonal",
      role: "Team Lead",
      image: Sonal,
      style: { left: "72%", bottom: "0px", height: "340px", zIndex: 2 },
    },
    {
      name: "Janvi Yadav",
      role: "College Relation Manager",
      image: Janvi,
      style: { left: "89%", bottom: "0px", height: "290px", zIndex: 1 },
    },
  ];

  return (
    <div className="text-white  min-h-screen flex flex-col items-center bg-black bg-cover bg-[image:url(./assets/bg-bad.png)]">
      {/* Header */}
      <div className="relative w-full max-w-7xl text-center pt-6">
        <h1 className="font-bold ml-64">
          <img
            src={Logo}
            alt="logo"
            className="-mt-16 ml-96"
            height={100}
            width={300}
          />
        </h1>
        <p className="text-lg -mt-20 ml-60">Powered by Mittal Alliance</p>
        <h2 className="text-6xl ml-60 mt-4 anton font-black">BENGALURU TEAM</h2>
      </div>

      {/* Team Section */}
      <div className="relative flex justify-center items-center w-full max-w-6xl mt-2">
        <div className="relative w-full h-[400px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="absolute w-52 -ml-10 bg-gray-800 text-center rounded-lg shadow-xl overflow-hidden"
              style={{
                ...member.style,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Box shadow
              }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                className="w-full"
              />
              {/* Gradient & Text */}
              <div
                className="absolute bottom-0 w-full h-1/3 text-white flex flex-col justify-center items-center"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(255, 0, 0, 1))", // Gradient
                }}
              >
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
