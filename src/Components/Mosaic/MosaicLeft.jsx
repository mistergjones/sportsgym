import React from "react";
import "./Mosaic.css";

export default function MosaicLeft(props) {
    return (
        <>
            <div className="row m-0 p-0">
                <div className="col m-0 p-0">
                    <img src={props.image} alt="" className="image-sizing" />
                </div>

                <div className="col align-self-center m-0 p-0">
                    <h3>{props.title}</h3>
                    <p>{props.paragraph1}</p>
                    <p>{props.paragraph2}</p>
                </div>
            </div>
        </>
    );
}
