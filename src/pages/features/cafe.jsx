import React from "react";

import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function cafe() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>

            <div className="full-page   ">
                <img src={require("../../Assets/features/cafe.jpg")} alt="" />
                <div className="centered">
                    <h3 className="hero-image-title">CAFE</h3>
                    <h3 className="hero-image-description">
                        REFRESH | RENEW | RELAX
                    </h3>
                </div>

                <section>
                    <h3>CAFE</h3>
                    <p className="m-2">
                        Need a space for you, your group, workplace or sports
                        group? We have multiple large group fitness studios and
                        lots of equipment for hire. Work out with your buddies,
                        colleagues or family members and sweat it out together.
                        Contact us for more information.
                    </p>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/healthyfood.jpg")}
                    title="Nutritous drinks and meals"
                    paragraph1="Our Gym features all of our healthy meal and snack options. Catch some ready to go choices and made-to-order meals."
                    paragraph2="OPENING HOURS - Mon – Fri 8am – 2pm"
                />
                <MosaicRight
                    image={require("../../Assets/features/healthymeals.jpg")}
                    title="Wide Variety"
                    paragraph1="Our cafe workers prepare a wonderful and wide ranging choices of lite & healthy meals.We often vary our menu selection to suit the time of season for the best tasting fruits and vegetables."
                    paragraph2="You're more than welcome to order one of our delicious meals before your workout and will be ready when your class / workout finishes!"
                />
            </div>
        </div>
    );
}
