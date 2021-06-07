import React from "react";
import "./styles.css";
import Search from "../../assets/icons/Search.svg";

export default function ButtonSearch({handleModalSearch}) {
  return (
    <button className="button-search" onClick={()=>handleModalSearch("active","")} type="button">
      <img src={Search} width="30px" alt="Pesquisar" />
      <span>Me encontre</span>
    </button>
  );
}
