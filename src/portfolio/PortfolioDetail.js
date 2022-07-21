import React, { useCallback, useMemo } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Tech from "../component/tech/TechBox";
import "./PortfolioDetail.css";

const PortfolioDetail = (props) => {
  const {
    data,
  } = props;

  const {
    title,
    content,
    tech_l,
    tech_f,
    tech_d,
    tech_dt,
    images,
    video,
  } = useMemo(() => data, [data]);

  const renderMediaComponent = useCallback(() => {
    return (
        video ? (
            <video
              loop
              autoPlay
              muted
              width="100%"
              height="60%"
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
        ) : (
            <SimpleImageSlider
              width={'100%'}
              height={'60%'}
              images={images}
              showNavs
              showBullets
            />
        )
    )
  }, [images, video]);

  return (
      <div className="model__body">
        <div className="model__body__divide">
          <div className="model__content">
            {renderMediaComponent()}
          </div>
          <div className="model__content model__border">
            <div className="model__top">
              <div className="model__title">{title}</div>
              <div className="model__text">{content}</div>
            </div>
            <div className="model__tech__box">
              <div className="tech__item">
                <div className="tech__title">Languages</div>
                <div className="tech__content">
                  <Tech content={tech_l} />
                </div>
              </div>
              <div className="tech__item">
                <div className="tech__title">Frameworks</div>
                <div className="tech__content">
                  <Tech content={tech_f} />
                </div>
              </div>
              <div className="tech__item">
                <div className="tech__title">Development Environments</div>
                <div className="tech__content">
                  <Tech content={tech_d} />
                </div>
              </div>
              <div className="tech__item">
                <div className="tech__title">Databases</div>
                <div className="tech__content">
                  <Tech content={tech_dt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PortfolioDetail;
