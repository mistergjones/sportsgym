import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

export default function personaltraining() {
    return (
        <div>
            <h3>Personal Training</h3>
            <h3>Personal Training</h3>
            <h3>Personal Training</h3>

            <div className="full-page">
                <img
                    src={require("../../Assets/membership/membershipoptions.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3 className="hero-image-title">PERSONAL TRAINING</h3>
                    <h3 className="hero-image-description">THE NEW YOU</h3>
                </div>

                <section>
                    <h3>
                        Requiring motivation and inspiration to reveal the new
                        you?
                    </h3>
                    <p>
                        Our qualified personal trainers are absolutely fantastic
                        and will work with you closely to realise your fitness
                        goals. They will be there every step of the way whilst
                        making sure you enjoy your own fitness journey.
                    </p>
                    <p>
                        Your assigned personal trainer provides a wealth of
                        advantages when you're ready. They are:
                    </p>

                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            &#10003; 1. Increase Accountability
                            <br></br>
                            &#10003; 2. You’ll learn about health, fitness, and
                            your body.
                            <br></br>
                            &#10003; 3. Helps with goal setting
                            <br></br>
                            &#10003; 4. You’ll get an individualized plan
                            <br></br>
                            &#10003; 5. Flexible schedule and format
                        </div>
                        <div className="col">
                            &#10003; 6. Promotes exercise variety <br></br>
                            &#10003; 7. Nutritional advice <br></br>&#10003; 8.
                            Helps your mental health <br></br>&#10003; 9.
                            Promotes a healthy lifestyle change <br></br>
                            &#10003; 10. You'll gain greater confidence
                        </div>
                        <div className="col"></div>
                    </div>
                </section>

                <MosaicLeft
                    image={require("../../Assets/features/personaltraining1.jpg")}
                    title="Our personal trainers"
                    paragraph1="Our personal trainers are just there to make you sweat — you likely learn something from your time together, too. They are extremely qualified. That means your personal trainer knows a lot about human physiology and body mechanics, behavior change, exercise science, and more. They can help you learn proper form, how to use specific equipment, and what exercises will be most effective for you."
                    paragraph2="Beyond that, they can teach you about greater health and fitness topics that will help you maintain a healthy lifestyle. 
                    
                    Lastly, having a personal trainer to guide you through the correct positioning and form is invaluable. They can help ensure that you’re performing the exercise most effectively for your body.
                    
                    You’ll not only likely see better results but also avoid potential injury this way."
                />
                <MosaicRight
                    image={require("../../Assets/features/personaltraining2.jpg")}
                    title="Flexible schedule and format"
                    paragraph1="You can meet with a personal trainer in person at a gym weekly, several times a week, or even monthly — whatever works best for you. Nowadays, virtual personal training is popular, too.

                    In this format, you’ll work out at your home while you video conference with your trainer, who will guide you through the workout on your phone or laptop.
                    "
                    paragraph2="Sessions typically range from 30–60 minutes and will cater to your personal goals. There’s a personal trainer for everyone, regardless of your physical abilities, level of experience, location, or budget."
                />
                <MosaicLeft
                    image={require("../../Assets/features/personaltraining3.jpg")}
                    title="Exercise Variety"
                    paragraph1="You may be a creature of habit when it comes to exercise, always gravitating to the same equipment at the gym or doing the same workouts at home.

                    A personal trainer can introduce you to exercises you may have never done before or would never have attempted on your own, decreasing your chance of boredom and hitting a plateau.
                    
                    "
                    paragraph2="Researchers found that changing things up with a varied workout routine made people feel more motivated. The fixed and varied routines also had similar muscular effects.

                    Moral of the story? It can be good to switch things up. You’ll challenge your body’s movement patterns and make your brain work, too. Plus, maybe you’ll find something you love. And if you don’t, you’ll be happy to know that you tried it."
                />
            </div>
        </div>
    );
}
