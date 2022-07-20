import React from "react";
import ReactModal from "react-modal-resizable-draggable";
import video from "../video/pfVideo.mp4";
import SimpleImageSlider from "react-simple-image-slider";
import Tech from "../component/tech/TechBox";
import "./Portfolio.css";
import img1 from "../images/card/p1-1.png";
import Data from "./dataArrays";
import "./modal/ReactModal.css";

const RealModal = (data) => {
  const images = [
    { img1 },
    { url: "images/card/p1-2.png" },
    { url: "images/card/p1-3.png" },
  ];

  let arr = Data[data.index];

  return (
    <>
      <ReactModal
        initWidth={800}
        initHeight={600}
        className={"modal-custom-class"}
        onRequestClose={data.cm}
        isOpen={data.io}
      >
        <div className="model__body">
          <div className="model__body__divide">
            <div className="model__img">
              {data.index === 2 ? (
                <video
                  loop
                  autoPlay
                  muted
                  width="100%"
                  height="35%"
                  controls="true"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                <SimpleImageSlider
                  width={300}
                  height={300}
                  images={images}
                  showNavs={true}
                />
              )}
            </div>
            <div className="model__content">
              <div className="model__top">
                <div className="model__title">{arr.title}</div>
                <div className="model__text">{arr.content}</div>
              </div>
              <div className="model__tech__box">
                <div className="tech__item">
                  <div className="tech__title">Languages</div>
                  <div className="tech__content">
                    <Tech content={arr.tech_l} />
                  </div>
                </div>
                <div className="tech__item">
                  <div className="tech__title">Frameworks</div>
                  <div className="tech__content">
                    <Tech content={arr.tech_f} />
                  </div>
                </div>
                <div className="tech__item">
                  <div className="tech__title">Development Environments</div>
                  <div className="tech__content">
                    <Tech content={arr.tech_d} />
                  </div>
                </div>
                <div className="tech__item">
                  <div className="tech__title">Databases</div>
                  <div className="tech__content">
                    <Tech content={arr.tech_dt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default RealModal;
