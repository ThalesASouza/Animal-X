import React from "react";
import "./styles.css";
import Logo from "../../assets/img/Header/Logo.svg";
import Pata from "../../assets/img/Header/Pata.svg";
import PersonAndDog from "../../assets/img/Header/PersonAndDog.svg";
import Gato from "../../assets/img/Header/Gato.svg";
import Cachorro from "../../assets/img/Header/Cachorro.svg";
import ButtonsFilter from "../ButtonsFilter/ButtonsFilter";

export default function Header({ filterDadosAnimais, dadosAnimais,handleModalSearch }) {
  return (
    <header className="header">
      {/*container header lado esquerdo*/}
      <div className="header-left">
        {/* div da img da pata do canto superior esquerdo */}
        <div className="header-img-pata">
          <img src={Pata} alt="Pata" />
        </div>

        <div className="header-logo">
          <img src={Logo} alt="Logo Animal-X" />
        </div>
        {/* div das img fato e cachorro do canto inferior esquerdo */}
        <div className="header-container-gato-cachorro">
          <div className="header-img-gato">
            <img src={Gato} alt="Gato" style={{ position: "absolute" }} />
          </div>
          <div className="header-img-cachorro">
            <img src={Cachorro} alt="Cachorro" />
          </div>
        </div>
        <div className="header-buttonsFilters">
          <ButtonsFilter
            handleModalSearch={handleModalSearch}
            filterDadosAnimais={filterDadosAnimais}
            dadosAnimais={dadosAnimais}
          />
        </div>
      </div>
      {/* container header lado esquerdo */}
      <div className="header-right">
        <div className="header-img-personDog">
          <img src={PersonAndDog} alt="PersonAndDog" />
        </div>
        <div className="header-buttons-login-cadastro">
          <button className="button-login">Entrar</button>
          <button className="button-cadastrar">Cadastrar</button>
        </div>
      </div>
    </header>
  );
}
