import React from "react";

const ErrorMessage = ({ message }) => {
  const [firstLine, secondLine] = message.split(".");

  return (
    <div className="bg-gray-200 w-auto h-[88px] rounded-lg mt-8 py-4 px-[107px] text-center text-red-600 font-normal text-xl">
      <h3 className="w-auto">{firstLine}.</h3>
      <p>{secondLine}</p>
    </div>
  );
};

export default ErrorMessage;
