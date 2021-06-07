import React, { useState, useEffect } from "react";
import CardsList from "../../components/CardsList";
import Header from "../../components/Header/";
import api from "../../Service/service";
import img from "../../assets/img/Home/NadaEncontrado.png";
import ModalSearch from "../../components/ModalSearch";
import "./styles.css";

export default function Home() {
  const [activeModalSearch, setModalSearch] = useState("inative");
  const [AlldadosAnimais, setAllDadosAnimais] = useState([]);
  const [filteredDadosAnimais, setFilteredDadosAnimais] = useState([]);

  async function getDadosAnimais() {
    const request = await api.get(`animal/animaisAdocao`);
    setAllDadosAnimais(request.data.content);
    setFilteredDadosAnimais(request.data.content);
  }

  useEffect(() => {
    getDadosAnimais();
  }, []);

  
  const handleModalSearch = (value)=>{
  
      setModalSearch(value);
  
  }


  const filterDadosAnimais = (value) => {
    const dadosAnimaisOld =
      AlldadosAnimais.length === filteredDadosAnimais.length ||
      filteredDadosAnimais.length <= 1 ||
      value === "Gatos" ||
      value === "Cachorros" ||
      value === "Outros pets"
        ? AlldadosAnimais
        : filteredDadosAnimais;

    const dadosAnimaisNew = (dadosAnimaisOld.lenght<1)?AlldadosAnimais:dadosAnimaisOld;

    const dadosFiltrados = dadosAnimaisNew.filter((item) => {
      if (
        item.categoria === value ||
        item.raca === value ||
        item.idade === parseInt(value) ||
        item.usuario.cidade === value ||
        item.apelido === value
      ) {
        return item;
      }
      return "";
    });

    setFilteredDadosAnimais(dadosFiltrados);
  };

  if (filteredDadosAnimais.length !== 0) {
    return (
      <>
        <Header
          handleModalSearch={handleModalSearch}
          filterDadosAnimais={filterDadosAnimais}
          dadosAnimais={filteredDadosAnimais}
        />
        <main>
          <CardsList dadosAnimais={filteredDadosAnimais} />

        </main>
        <ModalSearch status={activeModalSearch} handleModalSearch={handleModalSearch}  filterDadosAnimais={filterDadosAnimais}/>
      </>
    );
  } else {
    return (
      <>
        <Header
        handleModalSearch={handleModalSearch}
          filterDadosAnimais={filterDadosAnimais}
          dadosAnimais={filteredDadosAnimais}
        />

        <main>

          <div className="content">
            <div className="content-empty">
              <img src={img} alt="Imagem Informando que nada foi encontrado" />
              <p>Nenhum animal encontrado</p>
            </div>
          </div>
          <ModalSearch status={activeModalSearch} handleModalSearch={handleModalSearch}  filterDadosAnimais={filterDadosAnimais}/>
        </main>
      </>
    );
  }
}
