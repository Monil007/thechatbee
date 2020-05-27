import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div> */}
    {users ? (
      <div className="activeContainer">
        <h4>Online:</h4>
        <h4>
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img classname="activeImg" alt="Online Icon" src={onlineIcon} />
              &nbsp; {name}
            </div>
          ))}
        </h4>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
