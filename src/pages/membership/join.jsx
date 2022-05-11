import React from "react";
import JoinForm from "../../Components/forms/JoinForm";

export default function join() {
    return (
        <div>
            <div>
                <div className="full-page border-bottom">
                    <img
                        src={require("../../Assets/membership/membershipoptions.jpg")}
                        alt=""
                    />

                    <JoinForm />
                </div>
            </div>
        </div>
    );
}
