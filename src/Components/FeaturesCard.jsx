import React from "react";

export default function FeaturesCard() {
    return (
        <>
            <br></br>
            <div style={{ backgroundImage: "url(/gymbackground.jpg" }}>
                <div className="row row-cols-1 row-cols-md-2 g-4 opacity-75 pb-4">
                    <div className="col">
                        <div className="card rounded">
                            <span className="fa-solid fa-heart fa-2xl mt-5 mb-3"></span>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Friendly Team and Supportive Programs
                                </h5>
                                <p className="card-text">
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded">
                            <span className="fa-solid fa-thumbs-up fa-2xl mt-5 mb-3"></span>
                            <div className="card-body">
                                <h5 className="card-title">
                                    New Equipment and Loads of Classes
                                </h5>
                                <p className="card-text">
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded">
                            <span className="fa-solid fa-star fa-2xl mt-5 mb-3"></span>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Squeaky Clean Facilities
                                </h5>
                                <p className="card-text">
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card rounded">
                            <span className="fa-solid fa-users fa-2xl mt-5 mb-3"></span>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Experienced, Dedicated Trainers
                                </h5>
                                <p className="card-text">
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );
}
