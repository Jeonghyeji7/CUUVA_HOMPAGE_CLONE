import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";
import "./Portfolio.css";
import PortfolioCard from './PortfolioCard';
import portfolios from './dataArrays';
import { MODAL_TYPES, openModal } from "../lib/helper/modalHelper";
import PortfolioDetail from "./PortfolioDetail";

function Portfolio() {
  const handleOpenModal = useCallback((portfolio) => {
    openModal({
      modalType: MODAL_TYPES.RESIZABLE_MODAL,
      modalContents: {
        title: 'Portfolio',
        contents: <PortfolioDetail data={portfolio} />,
      },
    });
  } ,[]);

  const renderItem = useCallback(() => {
    return portfolios.map((portfolio) => {
      return <PortfolioCard key={uuid()} onClick={handleOpenModal} data={portfolio}/>
    })
  }, [handleOpenModal]);

  return (
    <div className="container cards">
      <div className="title card__title">Portfolio</div>
      <div className="cards__container__scroll">
        <div className="cards__container">
          <div className="cards__items">
            {renderItem()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
