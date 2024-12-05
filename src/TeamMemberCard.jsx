import React from 'react';

const TeamMemberCard = ({ image, name, designation }) => {
  return (
    <div className="bg-gradient-to-b from-bad-red to-transparent rounded-lg p-4 max-w-xs">
      <img src={image} alt={name} className="rounded-full w-32 h-32 mx-auto" />
      <h3 className="text-lg font-bold text-center mt-4">{name}</h3>
      <p className="text-gray-400 text-center">{designation}</p>
    </div>
  );
};

export default TeamMemberCard;