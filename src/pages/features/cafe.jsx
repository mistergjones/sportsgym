import React from "react";

import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function cafe() {
    return (
        <div>
            <h3>CAFE HERE</h3>
            <h3>CAFE HERE</h3>
            <h3>CAFE HERE</h3>

            <div className="full-page   ">
                <img src={require("../../Assets/features/cafe.jpg")} alt="" />
                <div className="centered">
                    <h3>CAFE</h3>
                    <h3>REFRESH | RENEW | RELAX</h3>
                </div>

                <section>
                    <h3>CAFE</h3>
                    <p>
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
            </div>
        </div>
    );
}
