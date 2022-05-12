import React from "react";

export default function Carousel() {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={require("../Assets/gym1.jpg")}
                        className="d-block w-100"
                        alt="..."
                    />

                    <div className="carousel-caption d-none d-md-block">
                        <div className="banner">
                            <div className="leftSide">POWER</div>
                            <div className="rightSide">GYM</div>
                        </div>
                        <span className="carousel-color">
                            &nbsp;Your Friendly Local Gym!&nbsp;
                        </span>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require("../Assets/gym2.jpg")}
                        className="d-block w-100"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="banner">
                            <div className="leftSide">POWER</div>
                            <div className="rightSide">GYM</div>
                        </div>
                        <span className="carousel-color">
                            &nbsp;Achieve your goals!&nbsp;
                        </span>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require("../Assets/gym3.jpg")}
                        className="d-block w-100"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <div className="banner">
                            <div className="leftSide">POWER</div>
                            <div className="rightSide">GYM</div>
                        </div>
                        <span className="carousel-color">
                            &nbsp;Great Classes! Great Environment!&nbsp;
                        </span>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
