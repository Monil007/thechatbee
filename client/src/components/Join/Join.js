import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppNavbar from "../AppNavbar/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>
        <AppNavbar />
      </div>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Get Started</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Hive"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
