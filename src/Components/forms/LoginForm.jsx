import React from "react";
import "./forms.css";

export default function LoginForm() {
    return (
        <div className="container center-screen-align">
            <form>
                <h3>Login</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mb-3">
                    Submit
                </button>
            </form>
        </div>
    );
}
