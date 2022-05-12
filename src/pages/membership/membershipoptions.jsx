import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function membershipoptions() {
    return (
        <div>
            <h3>Membership options</h3>
            <h3>Membership options</h3>
            <h3>Membership options</h3>
            <div className="full-page">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>Membership Info</h3>
                    <h3>
                        MEMBERSHIP | CASUAL VISITS | REHAB | YOUTH MEMBERSHIPS
                    </h3>
                </div>
                <section>
                    <h3>
                        Membership and casual options designed just for you.
                    </h3>
                    <p>
                        We offer all different sorts of membership so that you
                        only pay for what you use. You can tailor it to have Gym
                        only, Gym + Swim only, Classes only or everything
                        combined.
                    </p>
                    <p>
                        Come in and speak to one of our expert membership
                        consultants
                    </p>
                    <p>
                        We can help you find the best way to find out what sort
                        of membership is best for you and your intended results.
                    </p>

                    <p>
                        The big bonus in all of our memberships is that there is
                        zero lock-in and you can freeze your membership at ZERO
                        cost
                    </p>
                </section>

                <section>
                    <h3> Key Reasons To Join</h3>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            &#10003; Welcoming Staff
                            <br></br>
                            &#10003; No lock-in contracts ($99 Joining Fee)
                            <br></br>
                            &#10003; Modern Equipment
                            <br></br>
                            &#10003; Membership Freezes (no cost)
                            <br></br>
                            &#10003; Free car parking
                            <br></br>
                            &#10003; 24x7 Access
                        </div>
                        <div className="col">
                            &#10003; Air Conditioners <br></br>&#10003;
                            Complimentary Fitness Programs <br></br>&#10003;
                            Qualified Personal Trainers <br></br>&#10003; Creche
                            Services <br></br>
                            &#10003; Free WI-FI Services <br></br>
                            &#10003; Hassle Free Direct Debit
                        </div>
                        <div className="col"></div>
                    </div>
                </section>

                <MosaicLeft
                    image={require("../../Assets/membership/membershipoptions.jpg")}
                    title="Membership Options"
                    paragraph1="For less than a movie night out or a great cocktail you get 24/7 access to our gym facilities EACH WEEK! We offer in-house Express Circuits & Full Gym Access to all equipment and classes."
                    paragraph2="For only a few dollars extra, add the Pool & SPA component and you will enjoy all aspects whenever you want. (NOTE: Aqautics area only availble during staffed hours). All our memberships include free parking, complimentary wifi and locker use. Tailor your membership so you pay only for what you use."
                />
                <MosaicRight
                    image={require("../../Assets/membership/membershipoptions.jpg")}
                    title="Youth Fitness"
                    paragraph1="We all want adolescent teenagers to fall in love with being active from a young age. It will set them up for life."
                    paragraph2="That’s why we also offer a discounted membership that will make make it easier to educate children about the importance of health, fitness and wellness. Note: Our specialised memberships for under 18’s is restricted to staffed hours access."
                />
                <MosaicLeft
                    image={require("../../Assets/membership/membershipoptions.jpg")}
                    title="Membership options for every body."
                    paragraph1="Not too sure if you're ready to join up to our amazing gym and all the services we provided???? We understand completely so we make it easy for you to use any of our facilities or services on a casual basis. "
                    paragraph2="This can be a great and effective way to find your motivation and inspiration before joining our gym community. We can even organise a no-obligation & once off free 7-day pass from the outset to get you on your way. After the 7-day period is over, feel free to use our services casually or simply join!"
                />
                <MosaicRight
                    image={require("../../Assets/membership/membershipoptions.jpg")}
                    title="Corporate and Sports Clubs"
                    paragraph1="We are highly passionate about contributing to our local community. We love to partner with local business and sports clubs to help them achieve their goals and stay fit and healthy. "
                    paragraph2="If you would like us to work together either for 1-on-1 sessions, group training sessions, special events or for any other matter concerning your corporate or sport's club, feel free to reach out to us."
                />
                <MosaicLeft
                    image={require("../../Assets/membership/membershipoptions.jpg")}
                    title="TAC / Workcover Membership"
                    paragraph1="Given our in-depth and expert knowledge relating to health, body movement, muscle development and biomechanics,  we can help you with your work-cover or TAC claims for rehabilitation purposes. Reach out to us over the phone first so both parties can determine whether our services and features align with the details of your potential claim.  
                     "
                    paragraph2="Our trainers are qualified to help you with fitness programs to help with your rehabilitation. Lastly, our gym allows your physiotherapist / health care professional to attend your first session as part of your membership to ensure your rehabilitation program aligns. "
                />
            </div>
        </div>
    );
}
