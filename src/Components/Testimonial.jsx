import React from "react";
import StarRating from "./StarRating";

export default function Testimonial() {
    return (
        <div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Great Feedback</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        See what our members say about our gym!
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg px-4 me-sm-3"
                        >
                            Primary button
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4"
                        >
                            Secondary
                        </button>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This card has supporting text below as a
                                    natural lead-in to additional content.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This card has even longer content
                                    than the first to show that equal height
                                    action.
                                </p>
                            </div>

                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This card has supporting text below as a
                                    natural lead-in to additional content.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This card has even longer content
                                    than the first to show that equal height
                                    action.
                                </p>
                            </div>

                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
