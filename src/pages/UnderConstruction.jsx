import React from "react";
import GithubLink from "../components/GithubLink";
import TreeUnder from "../assets/TreeUnder.svg";
import Button from "../components/Button";

function UnderConstruction() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen  bg-gray-900 text-[#FEEFDD]">
      <GithubLink></GithubLink>

      <div className="flex flex-col justify-center items-center flex-wrap p-4">
        <img src={TreeUnder} className="h-52 mb-3 mx-10" />
        <div className="flex flex-col justify-center items-center flex-wrap">
          <h1 className="text-4xl font-bold mb-4">It's Under Construction</h1>
          <p className="text-lg">
            We're working hard to bring you this feature. Stay tuned!
          </p>
          <Button buttonText="Go Back" navigateTo="/" />
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
