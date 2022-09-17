import React, { useContext } from "react";
import "../assets/Constants/Fonts.css";
import "./Mid1.css";
import "./MediaMid1.css";
import headerImg from "../assets/header-img.svg";
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const Mid1 = () => {

  const { state, dispatch } = useContext(UserContext);

  const RenderTest = () => {
    if (state) {
      return <>
        <LightSpeed left><Link to="/test1"><button className="getbtn">Take Test</button></Link></LightSpeed>
      </>
    }
    else {
      return <>
        <LightSpeed left><Link to="/login"><button className="getbtn">Take Test</button></Link></LightSpeed>
      </>
    }
  }

  return (
    <div className="mid_all">
      <div className="mid1">
        <div className="mid1_left">
          <Roll right> <h1>Welcome to Career Rush </h1></Roll>
          <LightSpeed left><p>Career Counselling, Career guidance test </p></LightSpeed>

          <RenderTest />

        </div>
        <div className="mid_right">
          <Rotate bottom right> <img
            className="mid_right_img"
            src={headerImg}
            alt="HeaderImg"
          /></Rotate>
        </div>
      </div>


      <h1 className=" main_heading">Features</h1>
      {/* Section 1  */}
      <div data-aos="fade-up"
        data-aos-duration="1000" className="mid1_box_all">

        <div className="mid1_box_features">
          <h2 className="mid_box_heading features">CareerRush Assessment</h2>
          <div className="mid1_box_horizantal" />
          <p>
            The CareerRush Assessment is a Multiple Intelligence Assessment, which only assess one form of aptitude. Research shows that people have 8 different kinds of intelligence, usually with strength in 3 or 4 of them.
            You can find out more about your particular way of perceiving and thinking by taking this quiz to know what careers showcase your skills.
          </p>
        </div>

        <div className="mid1_box_features">
          <h2 className="mid_box_heading features">Career Library</h2>
          <div className="mid1_box_horizantal" />
          <p>
            The students will benefit from the many resources in our career library as they explore their various career alternatives. This provides information about the career, the courses offered, the prerequisites for entry, and the universities where these courses are offered. We also provide online courses from the Diksha and Swayam platforms pertaining to certain professions.
          </p>
        </div>
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className="mid1_box_all">

        <div className="mid1_box_features">
          <h2 className="mid_box_heading_features features">Career Counseling</h2>
          <div className="mid1_box_horizantal" />
          <p>
            Career counseling is for choosing the appropriate stream after the tenth grade and the appropriate career after the twelfth grade and graduation. You may have career uncertainty and indecision at any point in your career, so it's critical to seek the appropriate assistance. You can examine several career alternatives, their breadth, colleges, and chances with the help of CareerRush Counselors, who will also assist you in making the best career decision.
          </p>
        </div>

        <div className="mid1_box_features">
          <h2 className="mid_box_heading_features features">ChatBot</h2>
          <div className="mid1_box_horizantal" />
          <p>
            CareerRush Bot collects relevant data from the site's topics on careers, colleges, and courses. A student can quickly and easily find the information they need without having to look it up themselves.
            To aid students in selecting the best educational path for them, CareerRush Bot will first administer a quick test to the students. It will also give the student a link to its other featured pages after answering to the query so they can explore those pages for further information.
          </p>
        </div>
      </div>
      <div className="career_video">
        <video controls >
          <source src="/videos/Career_Rush.mp4" type="video/mp4" />
          {/* <source src="/videos/ID_4560094.mp4" type="video/mp4" /> */}
        </video>
      </div>
    </div>

  );
};

export default Mid1;
