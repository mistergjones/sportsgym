import React from "react";
import "./forms.css";

export default function JoinForm() {
    return (
        <div>
            <div className="container center-screen-align">
                <form>
                    <h3>Join</h3>

                    <div className="row">
                        <div className="col">
                            {" "}
                            <div className="mb-3">
                                <label
                                    htmlFor="firstname"
                                    className="form-label"
                                >
                                    Firstname:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    aria-describedby="firstnameHelp"
                                />
                                {/* <div id="firstnameHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label
                                    htmlFor="lastname"
                                    className="form-label"
                                >
                                    Lastname:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lasstname"
                                    aria-describedby="lastnameHelp"
                                />
                                {/* <div id="lastnameHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label
                                    htmlFor="password2"
                                    className="form-label"
                                >
                                    Re-type Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password2"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
