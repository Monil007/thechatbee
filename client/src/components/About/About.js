import React from "react";

import AboutNavbar from "../AboutNavbar/AboutNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./About.css";

const About = () => {
  return (
    <div>
      <div>
        <AboutNavbar />
      </div>
      <div className="aboutOuterContainer">
        <div className="aboutInnerContainer">
          <h1 className="aboutHeading">What's the Buzzz?</h1>{" "}
          <hr className="hr" />
          <h3 className="aboutAuthor">Author: Monil Kaneria</h3>
          <br />
          <p className="aboutPara">This is a free online chat app!</p>
          <p className="aboutPara">
            It lets you chat with your friends without worrying about data
            piracy.
          </p>
          <br />
          <p className="aboutPara">
            To start chatting with your friends follow the steps...
          </p>
          <ol className="aboutOl">
            <li className="aboutOl">Go to Join.</li>
            <li className="aboutOl">Write your name in the Name tab.</li>
            <li className="aboutOl">
              Write a Hive name. Make sure that every {/* <br /> */}
              person in your chat enters the same hive.
            </li>
          </ol>
          <ul className="aboutUl">
            <li className="aboutUl">
              <strong>Note:</strong> This chat doesn't store your data.{" "}
              {/* <br /> */}
              {/* &emsp; &nbsp; &nbsp; &nbsp;  */}
              Hence, all the chat history will be
              {/* <br /> */}
              {/* &emsp; &nbsp; &nbsp; &nbsp; */}
              deleted once you leave the chat.
            </li>
          </ul>
          <br />
          <h4 className="aboutPara">
            <strong>Keep Buzzzing!!!</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
