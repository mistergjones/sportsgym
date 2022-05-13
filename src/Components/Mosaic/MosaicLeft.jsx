import React from "react";
import "./Mosaic.css";

export default function MosaicLeft(props) {
    return (
        <>
            <div className="row m-2">
                <div className="col m-0 p-0">
                    <img src={props.image} alt="" className="image-sizing" />
                </div>

                <div className="col align-self-center m-0 p-0">
                    <h3 className="ms-2 me-2 p-2">{props.title}</h3>
                    <p className="justify-text ms-2 me-2">{props.paragraph1}</p>
                    <p className="justify-text ms-2 me-2">{props.paragraph2}</p>
                    <p className="justify-text ms-2 me-2">{props.paragraph3}</p>
                </div>
            </div>
        </>
    );
}
