import React from "react";
import { Link, Navigate } from "react-router-dom";
import GithubLink from "../components/GithubLink";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-[#FEEFDD] text-center">
      <GithubLink />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-4">Page Not Found</h2>
      <p className="text-lg ">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button buttonText="Go Back" navigateTo="/" />
      </Link>
    </div>
  );
}

export default NotFound;
