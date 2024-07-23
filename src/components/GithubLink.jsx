import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function GithubLink() {
  return (
    <div className="absolute top-4 left-8">
      <nav className="">
        <ul className="flex flex-col items-center  ">
          <li>
            <IconContext.Provider
              value={{
                color: "#F4E2B0",
                className: "global-class-name ",
                size: "40px",
              }}
            >
              <div>
                <Link
                  to={"https://github.com/ArjinAlbay/ebook-reader-frontend"}
                >
                  <FaGithub />
                </Link>
              </div>
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GithubLink;
