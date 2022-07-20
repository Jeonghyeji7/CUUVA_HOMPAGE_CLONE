import React from "react";
import "./About.css";
import img1 from "../images/cuu_img.png";
import img2 from "../images/cuu_img2.png";
import img3 from "../images/cuuva_img3.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content1">
          <div className="about-title">
            <div className="about-title-item">
              <div className="panel">
                <div>
                  <img src={img1} alt="이미지1" id="img1"></img>
                </div>
                <div>
                  <label for="img1">Cursor up</label>
                </div>
              </div>

              <div className="panel">
                <div>+</div>
                <div></div>
              </div>

              <div className="panel">
                <div>
                  <img src={img2} alt="이미지2" id="img2"></img>
                </div>
                <div>
                  <label for="img2">Value add</label>
                </div>
              </div>

              <div className="panel">
                <div>=</div>
                <div></div>
              </div>

              <div className="panel">
                <div>
                  <img src={img3} alt="이미지3" id="img3"></img>
                </div>
                <div>
                  <label for="img3">CUUVA</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="about-margin">
        <div className="about-content2">
          <div className="about-history">
            <div className="about-history-title">History</div>
            <div className="history-content">
              <div className="history-item">
                <div className="history-year">2019년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  "스마트미디어 시연서비스 시연환경 구축 및 서비스 관리
                  기능개발"외 11건 - 한국전자통신연구원 "KT IT 자산 통합
                  감시/관제 시스템 개발"외 4건 - KT
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2018년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  "신경망 학습 모델 기반 키 교환 효율성 검증을 위한 시뮬레이터 구현" 외 18건 – 한국전자통신연구원
                "KT IDC NMS 시스템 유지보수" 외 1건 – KT
                "맞춤형 기후정보서비스 (Agro-climate advisories)를 위한 모바일 기반 반응형 웹서비스 개발" 외 1건 –APEC 기후센터
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2017년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  연구개발서비스업 등록 
                  "주가상머신 환경에서의 딥러닝 기반 패스워드 제어 모듈 구현" 외 12건 – 한국전자통신연구원 "KT IDC
                  NMS 시스템 유지보수" 외 3건 – KT 
                  "태평양 도서국 상세예측 기반 구축을 위한 오프라인 상세화" – APEC 기후센터
                  "OCP 기반 차세대슈퍼컴퓨터 운영 관리 시스템 고도화" – KISTI
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2016년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  "스마트미디어 시연서비스 시연환경 구축 및 서비스 관리 기능개발"외 11건 - 한국전자통신연구원
                  "KT IT 자산 통합 감시/관제 시스템 개발"외 4건 - KT
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2015년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  "네트워크 트래픽 분석 및 시각화 GUI 개발" 외 15건 – 한국전자통신연구원
                  "KT IDC NMS 시스템 개발" 외 2건 – KT "APCC
                  기후자료 표준화 도구 개발" 외 1건 – APEC 기후센터
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2014년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  기업부설연구소 설립 "주행상황 인식범위 확장을 위한 V2I 시작품 제작" 외 13건 – 한국전자통신연구원
                  "백본고도화(Nexus7K)에 의한
                  IDC NMS 고객 수용 개발" 외 2건 – KT
                  "태평양 도서국 기후 예측 시스템(CLIK) 개발" – APEC 기후센터
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2013년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  표준 웹 기반 실시간 감시 관제 기술 관련 특허 등록
                  벤쳐기업 인증
                  "자율 주행 차량용 서비스 관제시스템 개발" 외 10건 –한국전자통신연구원
                  "KT 통합 NMS 유지보수" - KT
                </div>
              </div>

              <div className="history-item">
                <div className="history-year">2012년</div>
                <div className="histoty-blank"></div>
                <div className="history-year-content">
                  ㈜쿠바 법인 설립 "부채널 분석 시스템 개발" 외 6건 계약 –한국전자통신연구원
                "KT 통합 NMS 개발" 계약 - KT
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
