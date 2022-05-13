import React from "react";

import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function facilityhire() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>

            <div className="full-page">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3 className="hero-image-title">FACILITIES HIRE</h3>
                    <h3 className="hero-image-description">
                        PERSONAL | STUDIO | GYM | POOL
                    </h3>
                </div>

                <section>
                    <h3>Facilities Hire</h3>
                    <p className="m-2">
                        Need a space for you, your group, workplace or sports
                        group? We have multiple large group fitness studios and
                        lots of equipment for hire. Work out with your buddies,
                        colleagues or family members and sweat it out together.
                        Contact us for more information.
                    </p>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/gymstudio1.jpg")}
                    title="Facilities Hire: Studio"
                    paragraph1="Need a space for you, your group, workplace or sports group?
                    We have multiple large group fitness studios and lots of equipment for hire."
                    paragraph2="Work out with your buddies, colleagues or family members and sweat it out together.
                    "
                    paragraph3="Contact us for more information."
                />
                <MosaicRight
                    image={require("../../Assets/features/gymstudio2.jpg")}
                    title="Facilities Hire: Private Fitness Classes"
                    paragraph1="Private group fitness classes are a great way for your group, school or sports team to exercise together. You pick the style of class, we organize the instructor. 
                    "
                    paragraph2="Bring out the best in each other as you work through fitness routines and exercise regimens. It’s that easy to get started."
                    paragraph3="Contact us to book today."
                />
                <MosaicLeft
                    image={require("../../Assets/features/poollane.jpg")}
                    title="Facilities Hire: Pool/Lane"
                    paragraph1="Have a group of more than 5+ needing exclusive use of a lap lane, or a bigger group needing use of the whole pool? Input Fitness has an amazing aquatics pool facility that would be perfect for a day out together, especially during the hotter months. "
                    paragraph2="Hire out a lane or the entire pool to get started!
                    "
                    paragraph3="Contact us to find out more."
                />
                <MosaicRight
                    image={require("../../Assets/features/gym.jpg")}
                    title="Facilities Hire for Sports, Clubs or Corporate Groups"
                    paragraph1="Have a group of 5+ and wanting to use our facilities? Contact us today for competitive rates. We can offer you the best deal to get you started on your group or club fitness pathway. "
                    paragraph2=""
                />
            </div>
        </div>
    );
}
