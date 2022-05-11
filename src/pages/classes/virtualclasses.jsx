import React from "react";
import MosaicLeft from "../../Components/Mosaic/MosaicLeft";
import MosaicRight from "../../Components/Mosaic/MosaicRight";

import VirtualClassesImg from "../../Assets/classes/virtualclasses.jpg";

import "./classes.css";

export default function virtualclasses() {
    return (
        <>
            <div className="full-page">
                <img
                    src={require("../../Assets/classes/virtualclasses.jpg")}
                    alt=""
                />
                <div className="centered">
                    <h3>Virtual Classes</h3>
                    <h3>Dive into your workout!</h3>
                </div>

                <section>
                    <h3>Why Virtual Classes?</h3>
                    <p>
                        Virtual Classes are a great introduction to fitness
                        classes. You can follow along with the best instructors
                        in the world to reach your fitness goals. It’s a
                        NON-INTIMIDATING experience that will drive amazing
                        results and get you ready for live classes. Start your
                        Virtual Workouts by combining Les Mills classes with
                        pumping sound and motivation from the hottest
                        instructors on the planet.
                        <br></br>
                        <br></br>
                        <p>
                            Using our big screen in Studio 1 we have added over
                            100 virtual classes led by global instructors
                            dedicated to help you in your fitness journey. It’s
                            never been easier to attend your favorite classes.
                            Due to current demand, our classes are here to stay
                            and hugely popular at all the best gyms around the
                            world.
                        </p>
                    </p>
                </section>

                <MosaicLeft
                    image={VirtualClassesImg}
                    title="More classes. More choice."
                    paragraph1="As well as all of your favorite live classes our
                                virtual classes give you the choice and
                                convenience to workout at almost any time of the
                                day and night."
                    paragraph2="With over 100 extra classes for
                    you to chose from, there are more opportunities
                    for you to get your Bodypump, Bodybalance,
                    Bodycombat, CX works and Sh’bam classes in."
                />
                <MosaicRight
                    title="Master trainers instructing every class"
                    paragraph1="Each virtual class is instructed by the best Les
                                Mills master trainers from all around the world."
                    paragraph2="You can be sure that you are hitting every
                    safety cue and making sure your form is on point
                    in every class, and that you get the best
                    work-out of your life."
                    image={VirtualClassesImg}
                />
            </div>
        </>
    );
}
