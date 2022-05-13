import React from "react";

export default function lanepoolhire() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/aquatics/lanepool.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>Hire the entire pool or lane?</h3>
                    <h3>Contact Us</h3>
                </div>

                <section>
                    <h3>Pool / Lane Hire</h3>
                    <p>
                        Facilities Hire: Pool/Lane Have a group of more than 5+
                        needing exclusive use of a lap lane, or a bigger group
                        needing use of the whole pool? Input Fitness has an
                        amazing aquatics pool facility that would be perfect for
                        a day out together, especially during the hotter months.
                        Hire out a lane or the entire pool to get started!
                        Contact us to find out more.{" "}
                    </p>
                </section>
            </div>
        </div>
    );
}
