import React, {useState} from "react";
import CardAnimal from "../Cards";
import "./styles.css";
import ModalShare from "../ModalShare/ModalShare";

export default function CardsList({ dadosAnimais }) {

  const [activeModalShare,setModalShare] = useState("inative");
  const [dadosPet,setDadosPet] = useState("");

  const handleModalShare = ((value,id)=>{
     dadosAnimais.filter((item)=>{
        if(item.id===id){
          return setDadosPet(item);
        }
      return "";
    })
  
   
    setModalShare(value);
  })

  

  return (
    <div className="cards-content">
      {dadosAnimais.map((item, index) => {
        return <CardAnimal key={index} dadosPet={item} handleModalShare={handleModalShare}/>;
      })}
      <ModalShare status={activeModalShare} dadosPet={dadosPet} handleModalShare={handleModalShare}/>
    </div>
  );
}
