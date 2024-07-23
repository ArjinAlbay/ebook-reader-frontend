import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ buttonText, navigateTo }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(navigateTo);
  };

  return (
    <div className="mt-8 text-[#FEEFDD] ">
      <button
        onClick={handleBack}
        className="flex items-center py-2 px-3 border-[#FEEFDD] rounded border-t-1 border-l-0 border-r-0 border-b-1 font-medium select-none border transform transition duration-300 hover:scale-110 "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
