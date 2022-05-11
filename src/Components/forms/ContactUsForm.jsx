import React from "react";
import "./forms.css";

export default function ContactUsForm() {
    return (
        <div className="container center-screen-align">
            <div className="row">
                <div className="col">
                    <h3>Reception Hours</h3>
                    <p>
                        <span className="fw-bolder">Monday – Friday:</span>
                        5.30am – 9.30pm
                    </p>
                    <p>
                        <span className="fw-bolder">Saturday:</span> 8am – 5pm
                    </p>
                    <p>
                        <span className="fw-bolder">Sunday:</span> 8am – 4pm
                    </p>
                    <p>24/7 after hours access available with access fob</p>
                    <h3>Contact Us for Facilities Hire today. </h3>100 Smith
                    Street, Frankston, VIC 3199
                    <p>03 123 4567</p>
                </div>

                <div className="col">
                    <form>
                        <h3>Contact Us</h3>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Your Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                            >
                                What can we help you with?
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
