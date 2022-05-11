import React from "react";

export default function steamroom() {
    return (
        <div>
            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/aquatics/steamroom.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>Relax in our soothing ppol spa</h3>
                    <h3>Dive into your workout!</h3>
                </div>

                <section>
                    <h3>STREAM ROOM</h3>
                    <p>Sweat it out at our steam room today. </p>
                    <p>
                        A session in our steam room is the perfect way to end
                        your workout. Steam rooms have proven health benefits
                        that include detoxing, increased and sped up metabolism,
                        recovery and relaxation. Our steam room is perfect for
                        calming your body down and helping your physical
                        improvement with a bit of some down time from the gym.
                        We even have an infrared sauna with a range of health
                        benefits.
                    </p>
                </section>
            </div>
        </div>
    );
}
