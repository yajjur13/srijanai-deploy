import React from "react";
import "./Program.css";
import web_app from "../../assets/WebAppImage.png";
import program_2 from "../../assets/MobileApp.png";
import program_3 from "../../assets/WAchatbot.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs ">
      <div className="program">
        <img src={web_app} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Web Applications</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Mobile Applications</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>WhatsApp ChatBots</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
