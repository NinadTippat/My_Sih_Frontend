import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
import CareerLibrary from "./components/CareerLibrary/CareerLibrary";
import Logout from "./components/Authentication/Logout";
import NavBar from "./components/Nav/NavBar";
import EngineeringCourses from "./components/Courses/EngineeringCourses";

import MedicalCourses from "./components/Courses/MedicalCourses";

import CommerceCourses from "./components/Courses/CommerceCourses";

import FilmLineCourses from "./components/Courses/FilmLineCourses";

import EnvironmentalCourses from "./components/Courses/EnvironmentalCourses";

import Counselling from "./components/Counselling/Counselling";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Test1 from "./components/Test/Test1";
import Test2 from "./components/Test/Test2";
import Test3 from "./components/Test/Test3";
import Test4 from "./components/Test/Test4";
import Test5 from "./components/Test/Test5";
import Test6 from "./components/Test/Test6";
import Test7 from "./components/Test/Test7";
import Test8 from "./components/Test/Test8";
import Result from "./components/Test/Result";
import Aeronautical_Engineering from "./components/Courses/Engineering_Courses/Aeronautical_Engineering";
import Aerospace_Engineering from "./components/Courses/Engineering_Courses/Aerospace_Engineering";
import SociologyCourses from "./components/Courses/SociologyCourses";
import Architecture_Engineering from "./components/Courses/Engineering_Courses/Architecture_Engineering";
import Artificial_Intelligence_Engineering from "./components/Courses/Engineering_Courses/Artificial_Intelligence_Engineering";
import AstroNomy_Engineering from "./components/Courses/Engineering_Courses/AstroNomy_Engineering";
import Ayurveda from "./components/Courses/Medical_Courses/Ayurveda";
import Dental from "./components/Courses/Medical_Courses/Dental";
import Homeopathy from "./components/Courses/Medical_Courses/Homeopathy";
import CharteredAccountancy from "./components/Courses/Commerce_Courses/CharteredAccountancy";
import CharteredFinancialAnalysis from "./components/Courses/Commerce_Courses/CharteredFinancialAnalysis";
import EventManagement from "./components/Courses/Commerce_Courses/EventManagement";

//1.create context
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counselling" element={<Counselling />} />
      <Route path="/career_library" element={<CareerLibrary />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/engineering_courses" element={<EngineeringCourses />} />
      <Route path="/medical_courses" element={<MedicalCourses />} />
      <Route path="/commerce_courses" element={<CommerceCourses />} />
      <Route path="/filmline_courses" element={<FilmLineCourses />} />
      <Route path="/environmental_courses" element={<EnvironmentalCourses />} />
      <Route path="/sociology_courses" element={<SociologyCourses />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/test3" element={<Test3 />} />
      <Route path="/test4" element={<Test4 />} />
      <Route path="/test5" element={<Test5 />} />
      <Route path="/test6" element={<Test6 />} />
      <Route path="/test7" element={<Test7 />} />
      <Route path="/test8" element={<Test8 />} />
      <Route path="/result" element={<Result />} />
      <Route
        path="/aeronautical_engineering"
        element={<Aeronautical_Engineering />}
      />
      <Route
        path="/aerospace_engineering"
        element={<Aerospace_Engineering />}
      />
      <Route
        path="/architecture_engineering"
        element={<Architecture_Engineering />}
      />
      <Route
        path="/artificial_intelligence_engineering"
        element={<Artificial_Intelligence_Engineering />}
      />
      <Route
        path="/astornomy_engineering"
        element={<AstroNomy_Engineering />}
      />
      <Route path="/ayurveda_bams" element={<Ayurveda />} />
      <Route path="/dental_bds" element={<Dental />} />
      <Route path="/homeopathy" element={<Homeopathy />} />
      <Route path="/chartered_accountancy" element={<CharteredAccountancy />} />
      <Route
        path="/chartered_financial_analysis"
        element={<CharteredFinancialAnalysis />}
      />
      <Route path="/event_management" element={<EventManagement />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          <Routing />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
