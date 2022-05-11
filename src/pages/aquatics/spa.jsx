import React from "react";

export default function spa() {
    return (
        <div>
            <div className="full-page border-bottom">
                <img src={require("../../Assets/aquatics/spa.jpg")} alt="" />
                <div className="centered">
                    <h3>Relax in our soothing ppol spa</h3>
                    <h3>Dive into your workout!</h3>
                </div>

                <section>
                    <h3>SALT WATER SPA</h3>
                    If you are looking to relax and take some “you” time after
                    your workout, take some time at our salt water spa. With
                    proven health benefits, it’s great for recovery and
                    relaxation. Reward yourself by rewinding after your session
                    in the gym. This heated aquatics facility is dedicated to
                    helping you feel calmer, more relaxed and more rejuvenated
                    than ever.
                </section>
            </div>
        </div>
    );
}
