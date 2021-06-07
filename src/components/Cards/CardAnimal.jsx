import React from "react";
import "./styles.css";
import Wpp from "../../assets/icons/Wpp.svg";
import Femea from "../../assets/icons/Femea.svg";
import Macho from "../../assets/icons/Macho.svg";
import Local from "../../assets/icons/Local.svg";
import Share from "../../assets/icons/Share.svg";


export default function CardAnimal({ dadosPet,handleModalShare }) {


  const urlImage = "https://photoanimalx.s3.us-east-2.amazonaws.com/";
  const urlMap = `https://www.google.com/maps/place/${dadosPet.usuario.cidade} ${dadosPet.usuario.estado}`;
  const urlWpp = `https://api.whatsapp.com/send?text=Ola vim do *Animal X* , eu encontrei um _${dadosPet.especie}_ chamado *${dadosPet.apelido}*`;
 

  return (
   
    <ul className="card">
      <li className="card-img">
        <img src={urlImage + dadosPet.fotos[0].nome} alt="imagem do pet" />
      </li>

      <li className="card-name">
        <img
          src={dadosPet.sexo === "Masculino" ? Macho : Femea}
          alt="Icone de Sexo"
        />
        {"  " + dadosPet.apelido}
      </li>

      <li className="card-local">
        {dadosPet.usuario.cidade}, {dadosPet.usuario.estado}
      </li>

      <li className="card-porte-share">
        <p className={dadosPet.tamanho === "P" ? "card-port-ative" : "card-port-inative"}>
          P
        </p>
        <p className={dadosPet.tamanho === "M" ? "card-port-ative" : "card-port-inative"}>
          M
        </p>
        <p className={dadosPet.tamanho === "G" ? "card-port-ative" : "card-port-inative"}>
          G
        </p>

        <a href={urlMap}>
          <img src={Local} alt="Icone de Localização" />
        </a>

        <div onClick={()=>handleModalShare("active", dadosPet.id)}>
          <img src={Share} alt="Icone de Compartilhamento" />
        </div>
      </li>

      <li className="card-descricao">{dadosPet.descricao}</li>

      <li className="card-wpp">
        <a href={urlWpp}>
          <img src={Wpp} alt="Icone Whatsapp" />
        </a>
      </li>
    </ul>
  
   
  );
}
