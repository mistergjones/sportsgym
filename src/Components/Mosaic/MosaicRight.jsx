import React from "react";
import "./Mosaic.css";

export default function MosaicRight(props) {
    return (
        <>
            <div className="row  m-0 p-0">
                <div className="col align-self-center m-0 p-0">
                    <h3>{props.title}</h3>
                    <p className="justify-text  m-4">{props.paragraph1}</p>
                    <p className="justify-text  m-4">{props.paragraph2}</p>
                    <p className="justify-text  m-4">{props.paragraph3}</p>
                </div>
                <div className="col  m-0 p-0">
                    <img src={props.image} alt="" className="image-sizing" />
                </div>
            </div>
        </>
    );
}
