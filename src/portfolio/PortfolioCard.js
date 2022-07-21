import React, {useCallback, useMemo} from "react";
import "./Portfolio.css";
import Tech from "../component/tech/TechBox";

const PortfolioCard = (props) => {
  const {
    data,
    onClick,
  } = props;

  const handleOnClick = useCallback(() => {
    onClick(data);
  }, [onClick, data]);

  const {
    title,
    tech_l,
    images,
  } = data;

  const coverImg = useMemo(() => {
    if (images && images.length > 0) {
      return images[0];
    }

    return null;
  }, [images]);

  return (
      <div className="cards__item">
        <div className="cards__item__link" to="/portfolio">
          <div className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Image"
              src={coverImg}
              onClick={handleOnClick}
            />
          </div>
        </div>
        <div className="card__item__title">{title}</div>
        <div className="cards__item__tech">
          <Tech content={tech_l} />
        </div>
      </div>
  );
};

export default PortfolioCard;
