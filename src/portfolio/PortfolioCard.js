import React from "react";
import "./Portfolio.css";
import CardCover from "../images/card/p1-1.png";
import Tech from "../component/tech/TechBox";
import Data from "./dataArrays";

const PortfolioCard = (props) => {
  let arr = Data[props.index];
  console.log(arr);
  return (
    <>
      <div className="cards__item">
        <div className="cards__item__link" to="/portfolio">
          <div className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Image"
              src={CardCover}
              onClick={props.onClick}
            />
          </div>
        </div>
        <div className="card__item__title">{arr.title}</div>
        <div className="cards__items">
          <div className="cards__items__tech">
            <Tech content={arr.tech_l} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
