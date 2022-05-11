import React from "react";

import challenge1 from "../../Assets/challenge/challenge1.jpg";
import challenge2 from "../../Assets/challenge/challenge2.jpg";
import challenge3 from "../../Assets/challenge/challenge3.jpg";
import challenge4 from "../../Assets/challenge/challenge4.jpg";

export default function ChallengeCards() {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={challenge1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">WHY IT WORKS</h5>
                        <p className="card-text">
                            <p>
                                Forget about at home workouts and lounge room
                                letdowns. Going it alone is the reason most
                                people struggle to get their goals actualised.
                            </p>
                            <p>
                                Accountability and face to face support is the
                                key to consistent motivation & results.
                            </p>

                            <p>Don’t feel alone again.</p>

                            <p>
                                We’re here to help you prioritise yourself,
                                master your meals and feel confident in your
                                workouts.
                            </p>
                        </p>
                    </div>
                    <div className="card-footer m-0 p-0">
                        <a href="/contactus" className="btn btn-primary w-100 ">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={challenge2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">STRENGTH SESSIONS</h5>
                        <p className="card-text">
                            <p>Classes to burn over 800 calories</p>
                            <p>
                                Unlimited high intensity functional training
                                build your core, cardio & strength
                            </p>
                            <p>TRAINER SUPPORT</p>
                            <p>
                                Exercises tailored to any injuries or
                                limitations & technique correction Myzone belt
                            </p>
                        </p>
                    </div>
                    <div className="card-footer m-0 p-0">
                        <a href="/contactus" className="btn btn-primary w-100 ">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={challenge3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">TEAM SUPPORT & COACHING </h5>
                        <p className="card-text">
                            <p>
                                INBODY SCANNER - measurement consultations to
                                track your changes.
                            </p>
                            <p>
                                TRACKING CALENDAR - will help you schedule your
                                healthy habits.
                            </p>
                            <p>
                                42 days OF COACHING from our psychologist &
                                Wellness coach.
                            </p>
                            <p>
                                SUPPORT GROUP - Private FACEBOOK group to share
                                feedback, encourage each other and ask
                                questions.
                            </p>
                        </p>
                    </div>
                    <div className="card-footer m-0 p-0">
                        <a href="/contactus" className="btn btn-primary w-100 ">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src={challenge4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">NUTRITION PLAN </h5>
                        <p className="card-text">
                            <p>
                                Our team has been helping raise kids for over 10
                                years giving our mums and dads peace of mind and
                                lasting relationships.
                            </p>
                            <p>
                                We’ve been giving our members and families
                                support and care to ease the load and help busy
                                parents juggle the load of daily life.{" "}
                            </p>
                            <p>
                                With hundreds of referrals and testimonials,
                                you’ll make the team and the creche your first
                                choice.
                            </p>
                        </p>
                    </div>
                    <div className="card-footer m-0 p-0">
                        <a href="/contactus" className="btn btn-primary w-100 ">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
