import "./App.css";

import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

import Cafe from "./pages/features/cafe";
import FacilityHire from "./pages/features/facilityhire";
import Gym from "./pages/features/gym";
import PersonalTraining from "./pages/features/personaltraining";
import Supplements from "./pages/features/supplements";
import Nutrition from "./pages/features/nutrition";

import Classdescriptions from "./pages/classes/classdescriptions";
import Timetable from "./pages/classes/timetable";
import VirtualClasses from "./pages/classes/virtualclasses";

import Challenge from "./pages/challenge/challenge";

import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import NoPage from "./pages/NoPage";

import routes from "./Routes/routes";
import Casual from "./pages/membership/casual";
import Corporate from "./pages/membership/corporate";
import Join from "./pages/membership/join";
import Login from "./pages/membership/login";
import Membershipoptions from "./pages/membership/membershipoptions";
import Sportsclubs from "./pages/membership/sportsclubs";
import Tacworkcover from "./pages/membership/tacworkcover";
import Youthfitness from "./pages/membership/youthfitness";

import Creche from "./pages/creche/creche";

import Aquaaerobics from "./pages/aquatics/aquaaerobics";
import Lanepoolhire from "./pages/aquatics/lanepoolhire";
import Pool from "./pages/aquatics/pool";
import Spa from "./pages/aquatics/spa";
import Steamroom from "./pages/aquatics/steamroom";

import Contactus from "./pages/contactus/contactus";

// import FixedHeader from "./Components/FixedHeader";
// import Carousel from "./Components/Carousel";
// import YoutubeSection from "./Components/YoutubeSection";
// import Testimonial from "./Components/Testimonial";
// import Features from "./Components/Features";
// import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="cafe" element={<Cafe />} />
                        <Route path="facilityhire" element={<FacilityHire />} />
                        <Route path="gym" element={<Gym />} />
                        <Route
                            path="personaltraining"
                            element={<PersonalTraining />}
                        />
                        <Route path="supplements" element={<Supplements />} />
                        <Route path="nutrition" element={<Nutrition />} />

                        <Route path="timetable" element={<Timetable />} />
                        <Route
                            path="classdescriptions"
                            element={<Classdescriptions />}
                        />
                        <Route
                            path="virtualclasses"
                            element={<VirtualClasses />}
                        />

                        <Route path="challenge" element={<Challenge />} />
                        <Route path="creche" element={<Creche />} />

                        <Route path="casual" element={<Casual />} />
                        <Route path="corporate" element={<Corporate />} />
                        <Route path="join" element={<Join />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="membershipoptions"
                            element={<Membershipoptions />}
                        />
                        <Route path="sportsclubs" element={<Sportsclubs />} />
                        <Route path="tacworkcover" element={<Tacworkcover />} />
                        <Route path="youthfitness" element={<Youthfitness />} />

                        <Route path="aquaaerobics" element={<Aquaaerobics />} />
                        <Route path="lanepoolhire" element={<Lanepoolhire />} />
                        <Route path="pool" element={<Pool />} />
                        <Route path="spa" element={<Spa />} />
                        <Route path="steamroom" element={<Steamroom />} />

                        <Route path="contactus" element={<Contactus />} />

                        {/* <Route path="Features" element={<Features />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="FAQs" element={<FAQs />} />
                        <Route path="About" element={<About />} /> */}

                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
