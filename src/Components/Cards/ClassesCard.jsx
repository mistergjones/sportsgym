import React from "react";

export default function ClassesCard(props) {
    return (
        <div className="card h-100">
            <img src={props.image} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div class="card-footer bg-white m-0 p-0">
                <a href="/timetable" className="btn btn-primary w-100 ">
                    {props.timetableLink}
                </a>
            </div>
        </div>
    );
}
