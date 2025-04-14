import React from "react";

const ProfileCard = ({ name, description, image }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-2xl p-8 mb-9 flex items-center gap-6 w-[804px]">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-52 h-52 object-cover rounded-full border-2 border-blue-600 mr-8"
      />
      <div>
        <h2 className="text-xl font-bold line leading-[100%] text-blue-primary">{name}</h2>
        <p className="text-sm font-light text-gray-800 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
