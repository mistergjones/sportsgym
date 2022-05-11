import React from "react";

export default function CrecheCards() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={require("../../Assets/creche/creche1.jpg")}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">OUR HOURS</h5>
                            <p className="card-text">
                                <p>MON – FRI</p>
                                <p>SESSIONS 9:10AM, 10:10AM AND 11:10AM</p>

                                <p>Open to members and non members.</p>

                                <p>
                                    Call through on (03) 1234 5678) to book a
                                    single sessions or save & purchase a pack of
                                    10.
                                </p>
                            </p>
                        </div>
                        <div className="card-footer m-0 p-0">
                            <a
                                href="/contactus"
                                className="btn btn-primary w-100 "
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={require("../../Assets/creche/creche2.jpg")}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                ALIGNS WITH SCHOOL TERMS
                            </h5>
                            <p className="card-text">
                                <p>OUR CRECHE EST 2001</p>
                                <p>TERM 3 BOOKINGS NOW OPEN</p>
                                <p>MON-FRIDAY SESSIONS </p>
                                <p>FROM 9AM – 12PM</p>
                            </p>
                        </div>
                        <div className="card-footer m-0 p-0">
                            <a
                                href="/contactus"
                                className="btn btn-primary w-100 "
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={require("../../Assets/creche/creche3.jpg")}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">OUR TEAM </h5>
                            <p className="card-text">
                                <p>
                                    Our team has been helping raise kids for
                                    over 10 years giving our mums and dads peace
                                    of mind and lasting relationships.
                                </p>
                                <p>
                                    We’ve been giving our members and families
                                    support and care to ease the load and help
                                    busy parents juggle the load of daily life.{" "}
                                </p>
                                <p>
                                    With hundreds of referrals and testimonials,
                                    you’ll make the team and the creche your
                                    first choice.
                                </p>
                            </p>
                        </div>
                        <div className="card-footer m-0 p-0">
                            <a
                                href="/contactus"
                                className="btn btn-primary w-100 "
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
