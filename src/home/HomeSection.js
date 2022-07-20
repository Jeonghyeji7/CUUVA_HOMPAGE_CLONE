import React from "react";
import "./HomeSection.css";
import "../App.css";
import slideimage from '../images/slide-icon.png'

function HomeSection() {
  return (
    <div className="home-container">
      <div className="home-box">
        <div className="home-box-main">
        <div className="home-box1">CUUVA</div>
        <div className="home-box2">
          We develop your IT products based on high technology and trust.
        </div>
        <div className="home-box3">
          ㈜쿠바는 2012년 설립이후 NMS(Network Management System),
          GIS(Geographic Information System), Open Source 커스터마이징, UI/UX등
          다양한 분야의 제품 개발을 통해 높은 기술력과 고객사와의 깊은 신뢰를
          쌓아오고 있습니다.<br /> 
          앞으로도 고객사의 성공을 위한 더 높은 가치 창출에
          집중할 것입니다.
        </div>
        <div className="home-slide">
              <p>slide</p>
              <img src={slideimage} alt="slide?"></img>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
