import React from "react";
import logo from "../assets/logo.svg";
import leaf from "../assets/leaf.png";
import { Link } from "react-router-dom";
import GithubLink from "../components/GithubLink";
import Button from "../components/Button";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen ">
      <GithubLink></GithubLink>
      <div className="text-center">
        <img src={leaf} className="w-40 mx-auto " />
        <img src={logo} className="w-96 mx-auto" />
        <hr className="m-4 text-[#FEEFDD] " />
        <p className="text-xl font-semibold text-[#FEEFDD]">
          Welcome to BookReader - Dive into your next adventure!
        </p>
      </div>

      <div className="text-[#FEEFDD] ">
        <Link to="/underconstruction">
          <Button buttonText="Open App" navigateTo="/underconstruction" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
