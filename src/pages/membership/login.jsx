import React from "react";
import LoginForm from "../../Components/forms/LoginForm";

export default function login() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />

                <LoginForm />
            </div>
        </div>
    );
}
