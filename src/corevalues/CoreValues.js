import React from "react";
import "./CoreValues.css";
import CoreValuesCard from "./CoreValuesCard";
import img1 from "../images/coreimg/value_icon_01.png";
import img2 from "../images/coreimg/value_icon_02.png";
import img3 from "../images/coreimg/value_icon_03.png";
import img4 from "../images/coreimg/value_icon_04.png";
import img5 from "../images/coreimg/value_icon_05.png";
import img6 from "../images/coreimg/value_icon_06.png";


const CoreValues = () => {
  return (
    <div className="container cv-container">
      <div className="title cv__title">Core Values</div>
      <div className="cv__scroll">
        <div className="cv__cards">
          <CoreValuesCard
            index="1"
            src={img1}
            big="신속 정확"
            small="Agility"
            content="난이도 높은 시스템 개발을 다년간 성공적으로 구축한 경험을 바탕으로 고객의 요구와 기대에 대응할 수 있습니다. 문제 발생에 대비하고 신속/정확하게 원인을 파악하고 즉시 처리함으로써 높은 품질의 IT 서비스를 제공하고 있습니다."
          />
          <CoreValuesCard
            index="2"
            src={img2}
            big="팀 강도"
            small="Team Strength"
            content="개발자들은 간단한 팀 강도 모델을 사용하여 고객과 소통합니다. 디자이너와 엔지니어는 월 단위로 하나의 풀 타임 프로젝트에 할당 됩니다. 이를 통해 팀은 고객의 가치 창출에만 초점을 맞추어 제품개발에 몰두하고 있습니다."
          />
          <CoreValuesCard
            index="3"
            src={img3}
            big="고객 중심의 디자인"
            small="User-Centered Design"
            content="디자인은 고객의 비지니스와 목표에 대한 깊은 이해를 바탕으로 제작되어야 합니다. 디자인 팀은 고객의 요구와 가치에 대한 면밀한 분석 작업을 통해 최상의 제품 개발에 기여하고 있습니다."
          />
        </div>
        <div className="cv__cards">
          <CoreValuesCard
            index="4"
            src={img4}
            big="빠른 결과물 제공"
            small="Rapid Delivery"
            content="소프트웨어 개발 과정의 오류를 미리 예방하기 위해 고객에게 단계별 결과물을 빠르고 자주 전달하고 있습니다. 업무용 소프트웨어를 고객에게 자주 제공함으로써 소중한 개발 시간과 자원을 절약하고 있습니다."
          />
          <CoreValuesCard
            index="5"
            src={img5}
            big="최적의 페이스"
            small="Optimal Pace"
            content="밤샘 작업, 주말 작업은 생산성 향상에 도움이 안되는 것으로 입증 되었습니다. 엔지니어 개인의 휴식, 재충전, 자율을 보장함으로써 고객의 요구를 만족하는 최상의 제품 개발에 노력하고 있습니다."
          />
          <CoreValuesCard
            index="6"
            src={img6}
            big="협력관계"
            small="Partnership"
            content="고품질의 코드와 우수한 디자인, 고객과의 소통을 통해 고객사의 장기적인 파트너가 되는 것이 우리의 목표입니다. 이를 위해 우선 순위를 효과적으로 설정하고 적절한 시점에 정확한 기능을 구현하기 위해 끊임없이 노력하고 있습니다."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
