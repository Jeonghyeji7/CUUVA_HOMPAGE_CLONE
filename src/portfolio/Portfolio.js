import React from "react";
import "./Portfolio.css";

import { useState } from "react";
import RealModal from "./RealModal";
import PortfolioCard from './PortfolioCard';


function Portfolio(props) {

  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

   const openModal=(index)=>()=> {
      setModal(true);
      setModalIndex(index)
  };

  const onlyOpen=()=>{
    setModal(true)
  }

  const closeModal = () => {
    setModal(false);
  };
  
  return (
    <>
    <div className="cards">
      <div className="card__title">Portfolio</div>
      <div className="cards__container__scroll">
        <div className="cards__container">
          <div className="cards__items">
            <PortfolioCard 
            onClick={openModal(0)}
            index={0}/>
             <PortfolioCard 
            onClick={openModal(1)}
            index={1}/>
              <PortfolioCard 
            onClick={openModal(2)}
            index={2}/>
            
          </div>
          <div className="cards__items">
          <PortfolioCard 
            onClick={openModal(3)}
            index={3}/>
             <PortfolioCard 
            onClick={openModal(4)}
            index={4}/>
              <PortfolioCard 
            onClick={openModal(5)}
            index={5}/>
          </div>
        </div>
      </div>
    </div>
    <RealModal index={modalIndex} cm={closeModal} io={modal && onlyOpen} />
    </>
  );
}

export default Portfolio;
