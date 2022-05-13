import React from "react";
import ChallengeCards from "../../Components/challenge/ChallengeCards";
import TestimonialCard from "../../Components/Testimonial/TestimonialCard";

import portrait1 from "../../Assets/challenge/portrait1.jpg";
import portrait2 from "../../Assets/challenge/portrait2.jpg";
import portrait3 from "../../Assets/challenge/portrait3.jpg";

import portrait4 from "../../Assets/challenge/portrait4.jpg";

export default function challenge() {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <section>
                <h3>TOP 3 REASONS PEOPLE CAN’T GET INTO SHAPE</h3>
                <ul>
                    <p>1. They don’t make themselves a PRIORITY.</p>
                    <p>2. They don’t know what to CHANGE.</p>
                    <p>3. They can’t STAY motivated.</p>
                </ul>

                <p>
                    Our program solves all these problems and gives you the best
                    chance at making a lasting change to your health and
                    physique.
                </p>

                <h3> A COMPLETE WELLNESS, WORKOUT & WEIGHT-LOSS PROGRAM</h3>
                <p>
                    Joining others on the same determined journey, gives you 42
                    days of non negotiable focus.
                </p>
                <p>
                    It connects you to a contagious group of achievers and
                    supporters who are invested in your outcome. It enables you
                    to dedicate only 6 weeks to learning, applying and mastering
                    the most important aspect of your life, happiness and
                    longevity.
                </p>

                <h3>YOUR HEALTH & MENTAL WELLBEING</h3>
                <p>
                    Be guided by our coaching plan which supplies you with 42
                    days of education to reprogram your mind and coping
                    strategies so you understand the role food, energy and
                    nutrition should really play in your life. Helping you to
                    finally master emotions, setbacks, personal & social habits
                    & reset your life for general.
                </p>

                <p>
                    You’ll finish the program appreciating the simplicity of
                    nutritious meal planning and the fundamental principles of
                    mind & body.
                </p>
                <h3>WELLNESS</h3>
                <p>
                    Learn how to activate your body for high intensity core
                    strength, cardio and muscle toning to best utilise your
                    macro building blocks of carbs, proteins & healthy fats.
                </p>
                <p>
                    We’ll help you rebuild your body for strength, fat burning &
                    mindful recovery. You’ll love the energy of our high
                    intensity functional training classes and you’ll come to
                    compete with your personal best to achieve more each week.
                    You’ll feel in control of your goal and inspired by
                    noticeable improvements.{" "}
                </p>
                <p>
                    {" "}
                    We’ll guide you through correct technique, to avoid injury
                    or burnout so you’ll love the confidence your healthy body
                    gives you after each workout and before every fabulous meal.
                    We’ll help you burn calories, convert fat to muscle and help
                    you tone & strengthen for the ultimate transformation.{" "}
                </p>
                <p>
                    {" "}
                    You’ll see for yourself the power of consistency. The key to
                    anti ageing and life long energy is the quality of your
                    regular WORKOUTS.
                </p>
            </section>

            <h3>WHAT DOES THE 8 WEEK CHALLENGE INCLUDE?</h3>

            <ChallengeCards />
            <br></br>
            <div className="row">
                <h3>Testimonials</h3>
                <div className="col">
                    <TestimonialCard
                        image={portrait1}
                        title="Ben Smith"
                        text="“It’s shown me that my weight does not define me and that exercise is way more fun when I am consistent which I will now be doing”."
                    />
                </div>
                <div className="col">
                    <TestimonialCard
                        image={portrait2}
                        title="Anne Jones"
                        text="“I’ve loved being happier with my self overall. It’s reaffirmed for me the importance of diet and has shown me a great path to achieve it”."
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TestimonialCard
                        image={portrait3}
                        title="Helen Dimitry"
                        text="“These classes was pretty challenging but absolutely loving the classes.  Now have a sense of control over my mental health and physical”."
                    />
                </div>
                <div className="col">
                    <TestimonialCard
                        image={portrait4}
                        title="Tara Rush"
                        text="“I love the motivation of being in a group of like minded and supportive people. Seeing that it works and setting a path forward for myself“."
                    />
                </div>
            </div>
        </div>
    );
}
