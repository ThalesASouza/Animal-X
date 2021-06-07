import React, { useState } from "react";
import ButtonSearch from "../ButtonSearch";
import ArrowUp from "../../assets/icons/ArrowUp.svg";
import ArrowDown from "../../assets/icons/ArrowDown.svg";


import "./styles.css";

export default function ButtonsFilter({ filterDadosAnimais, dadosAnimais,handleModalSearch}) {
  const [buttonsTop] = useState(["Gatos", "Cachorros", "Outros Pets"]);
  const [buttonsBottom, setbuttonsBottom] = useState({
    filters: [
      { name: "Raça", valor: "raca", arrow: ArrowDown, subButtons: [] },
      { name: "Idade", valor: "idade", arrow: ArrowDown, subButtons: [] },
      { name: "Localização", valor: "cidade", arrow: ArrowDown, subButtons: []}
    ],
  });

  const handleSubButtonsFilters = (indexButton) => {
    const newStateButtons = {
      filters: buttonsBottom.filters.map((item, index) => {
        
        if (index === indexButton && item.arrow === ArrowDown) {
          
          item.arrow = ArrowUp;
          item.subButtons = dadosAnimais.length > 0 
          ? setSubButtonsFilter(item.valor) 
          : [];
        
        }else if (index === indexButton && item.arrow === ArrowUp) {
          item.arrow = ArrowDown;
          item.subButtons = [];
        }

        return item;
      }),
    };

    setbuttonsBottom(newStateButtons);
  };

  const handleFilterCards = (event) => {
    const value = event.target.value;
    filterDadosAnimais(value);
  };

  const setSubButtonsFilter = (prop) => {
    let newSubButtonValue = [];

    dadosAnimais.filter((item) => {
      const itemAgrupado = prop !== "cidade" ? item[prop] : item.usuario[prop];

      const verificarItem = newSubButtonValue.some((valor) => valor === itemAgrupado);

      return verificarItem === false
        ? newSubButtonValue.push(itemAgrupado)
        : "";
    });

    return newSubButtonValue;
  };

  return (
    <div className="buttons-filter">
      <div className="list-buttons-top-filter">
        {buttonsTop.map((item, index) => {
          return (
            <button
              key={index}
              className="item-buttons-top-filter"
              value={item}
              onClick={handleFilterCards}
            >
              {item}
            </button>
          );
        })}
      </div>
      <ul className="list-buttons-bottom-filter">
        {buttonsBottom.filters.map((item, index) => {
          if (index !== 2) {
            return (
              <li
                key={index}
                className="item-buttons-bottom-filter"
                onClick={() => handleSubButtonsFilters(index)}
              >
                <div className="item-buttons-content">
                  <span>{item.name}</span>
                  <img src={item.arrow} alt="Seta" />
                </div>
                <ul className="sub-list-buttons-bottom-filter">
                  {item.subButtons.map((item, index) => {
                    return (
                      <li key={index} className="sub-item-buttons-bottom-filter">
                        <button
                          key={index}
                          value={item}
                          onClick={handleFilterCards}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className={`${"item-" + index + "-buttons-bottom-filter"}`}
              >
                <div
                  className={`${"item-" + index + "-buttons-content"}`}
                  onClick={() => handleSubButtonsFilters(index)}
                >
                  <span>{item.name}</span>
                  <img src={item.arrow} alt="Seta" />
                </div>
                <ul
                  className={`${"sub-list-" + index + "-buttons-bottom-filter"}`}
                >
                  {item.subButtons.map((item, index) => {
                    return (
                      <li key={index} className="sub-item-buttons-bottom-filter" >
                        <button
                          key={index}
                          value={item}
                          onClick={handleFilterCards}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <ButtonSearch handleModalSearch={handleModalSearch} />
              
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
