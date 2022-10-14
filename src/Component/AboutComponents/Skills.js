import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandReactNative } from 'react-icons/tb';
import { SiJava } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skill-title">My Skill</h1>
      <hr color="red" className="hr-line" />
      <div className="skill-container">
        <div className="card-l-one">
          <div className="skill-cards">
            <AiFillHtml5 className="skill-icon" />
            <h4 className="icon-name">HTML</h4>
            <p className="icon-ff">hypertext markup language</p>
          </div>
          <div className="skill-cards">
          <FaCss3Alt className="skill-icon" />
            <h4 className="icon-name">CSS</h4>
            <p className="icon-ff">cascading style sheet</p>
          </div>
          <div className="skill-cards">
          <TbBrandJavascript className="skill-icon" />
            <h4 className="icon-name">JS</h4>
            <p className="icon-ff">javascript</p>
          </div>
        </div>
        <div className="card-l-one">
          <div className="skill-cards">
          <GrReactjs className="skill-icon" />
            <h4 className="icon-name">REACT JS</h4>
            <p className="icon-ff">javascript library for web</p>
          </div>
          <div className="skill-cards">
          <TbBrandReactNative className="skill-icon" />
            <h4 className="icon-name">REACT NATIVE</h4>
            <p className="icon-ff">javascript library for android</p>
          </div>
          <div className="skill-cards">
          <SiJava className="skill-icon" />
            <h4 className="icon-name">JAVA</h4>
            <p className="icon-ff">programming language</p>
          </div>
        </div>
      </div>
      <div className="skill-footer">Bottom Skill</div>
    </div>
  );
};

export default Skills;
