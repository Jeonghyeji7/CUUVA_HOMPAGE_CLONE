import React from "react";
import "./CoreValues.css";

function CoreValuesCard(props) {
  return (
    <>
        <div className="cv__card">
          <div className="cv__number">STEP{props.index}</div>
          <div className="cv__contents">
            <div>
              <img className="cv__img" alt="?" src={props.src} />
            </div>
            <div className="cv__big">{props.big}</div>
            <div className="cv__small">{props.small}</div>
            <div className="cv__content">{props.content}</div>
          </div>
        </div>
    </>
  );
}

export default CoreValuesCard;
