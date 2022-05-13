import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function nutrition() {
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
                <div className="centered">
                    <h3 className="hero-image-title">NUTRITIOUS MEALS</h3>
                    <h3 className="hero-image-description">STAY ON TRACK</h3>
                </div>

                <section>
                    <h3>Pre-packed nutritous meals</h3>
                    <p>
                        Our gym also provides pre-packs nutritious meals that
                        are designed for a varitey of dietary goals. If you
                        require more protein based meals or require a more
                        vegetarian based meal, we have you covered!
                    </p>
                    <p>
                        All meals display the calorie, protein and mineral
                        information to make life easy for you.
                    </p>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/healthymeals1.jpg")}
                    title="Why a healthy diet?"
                    paragraph1="It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet."
                    paragraph2="A balanced diet supplies the nutrients your body needs to work effectively. Without balanced nutrition, your body is more prone to disease, infection, fatigue, and low performance.

                   "
                />
                <MosaicRight
                    image={require("../../Assets/features/healthymeals2.jpg")}
                    title="Educating Children about a healthy diet"
                    paragraph1="We want kids to fall in love with being active from a young age and also having a great understanding in the importance of a balanced diet. Children who don’t get enough healthy foods may face growth and developmental problems, poor academic performance, and frequent infections.
                    
                    They can also develop unhealthy eating habits that may persist into adulthood."
                    paragraph2="
                    Without exercise, they’ll also have a higher risk of obesity and various diseases that make up metabolic syndrome, such as type 2 diabetes and high blood pressure. If you're a parent and join our gym, you will instantly understand how important a balanced diet is for everyone. "
                />
            </div>
        </div>
    );
}
