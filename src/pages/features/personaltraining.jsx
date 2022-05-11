import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function personaltraining() {
    return (
        <div>
            <h3>Personal Training</h3>
            <h3>Personal Training</h3>
            <h3>Personal Training</h3>

            <div className="full-page border-bottom">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>PERSONAL TRAINING</h3>
                    <h3>THE NEW YOU</h3>
                </div>

                <section>
                    <h3>
                        Membership and casual options designed just for you.
                    </h3>
                    <p>
                        We offer all different sorts of membership so that you
                        only pay for what you use. Come in and speak to one of
                        our expert membership consultants. We can help you find
                        the best way to find out what sort of membership is best
                        for you and your intended results.
                    </p>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/personaltraining1.jpg")}
                    title="Main Gym"
                    paragraph1="For less than a movie night out or a great cocktail you get 24/7 access to our gym facilities EACH WEEK! We offer Express Circuit, Hammer Strength and Life Fitness equipment, huge cardio zone and much more. "
                    paragraph2="For a few dollars extra, add an entire week of live and virtual classes, infrared sauna, childcare, pool, steam room and spa. All our memberships include free parking, complimentary wifi and locker use. Tailor your membership so you pay only for what you use."
                />
                <MosaicRight
                    image={require("../../Assets/features/personaltraining2.jpg")}
                    title="Gym Studio 1"
                    paragraph1="We want kids to fall in love with being active from a young age."
                    paragraph2="That’s why we developed our youth membership, making it easier to educate children about the importance of health, fitness and wellness. We offer specialised memberships for our under 18’s with restricted staffed hours access."
                />
                <MosaicLeft
                    image={require("../../Assets/features/personaltraining3.jpg")}
                    title="Gym Studio 2."
                    paragraph1="We understand membership isn’t for everyone, so we make it easy for you to use any of our facilities or services on a casual basis. This can be a great, slow beginning to what can be an amazing fitness outcome. "
                    paragraph2=""
                />
            </div>
        </div>
    );
}
