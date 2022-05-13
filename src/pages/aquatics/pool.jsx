import React from "react";
import "./aquatics.css";

export default function pool() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/aquatics/indoorpool.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>Warm Indoor Salt Water Pool</h3>
                    <h3>Dive into your workout!</h3>
                </div>

                <section>
                    <h3>Salt Water Pool | Salt Water Spa | Steam Room </h3>
                    Enjoy our aquatics facilities at Input Fitness Gym and
                    Health Club (Frankston). We have multiple aquatics where you
                    can relax or rejuvenate. Even better than that, spending
                    time at our pool or steam room can even help you reach your
                    fitness goals. Our dedicated team can help you. Contact us
                    learn more about how we can help you achieve your fitness
                    objectives. Give us a call or send an enquiry today.
                </section>
            </div>
        </>
    );
}
