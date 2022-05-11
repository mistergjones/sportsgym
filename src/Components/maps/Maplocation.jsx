import React from "react";

export default function Maplocation() {
    return (
        <div>
            <div className="row  center-screen-align">
                <h3>Our Location</h3>
                <div className="col">
                    <h3>Reception Hours</h3>
                    <p>Monday – Friday: 5.30am – 9.30pm </p>
                    <p> Saturday: 8am – 5pm</p>
                    <p>Sunday: 8am – 4pm</p>
                    <p>24/7 after hours access available with access fob</p>
                    <h3>Physical Location: </h3>100 Smith Street, Frankston, VIC
                    3199
                    <p>03 123 4567</p>
                </div>
                <div className="col rounded">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402586.85598240385!2d144.7722715936886!3d-37.972232604979446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1652060863056!5m2!1sen!2sau"
                        width="600"
                        height="400"
                        // style="border:0;"
                        // allowfullscreen=""
                        // loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
