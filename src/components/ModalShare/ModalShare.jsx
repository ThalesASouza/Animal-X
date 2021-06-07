import React  from 'react'
import facebook from '../../assets/icons/Facebook.svg'
import twitter from '../../assets/icons/Twitter.svg'
import Wpp from "../../assets/icons/Wpp.svg";
import ArrowBack from "../../assets/icons/ArrowBack.svg";
import "./style.css"



export default function ModalShare({status,dadosPet,handleModalShare}) {
    const urlWeb = 'https://animal--x.web.app/';
    const urlFace = `https://www.facebook.com/sharer/sharer.php?u=${urlWeb}`;
    const urlWpp = `https://api.whatsapp.com/send?text=Ola vim do *Animal X* (${urlWeb}), eu encontrei um _${dadosPet.especie}_ chamado *${dadosPet.apelido}*`;
    const urlTwitter = `https://twitter.com/intent/tweet?url=${urlWeb}&text=Ola vim do Animal X, eu encontrei um ${dadosPet.especie} chamado ${dadosPet.apelido}`;
   
    return (
        <div>
            <div className={`${"modal-"+status}`} onClick={()=>handleModalShare("inative")}>
            </div>
            <ul className={`${"modal-share-"+status}`}>
             <li className="modal-share-header">
                <img src={ArrowBack} alt="Icone de Voltar" onClick={()=>handleModalShare("inative")}/>
                <p>Compartilhar no...</p>
             </li>
             <li className="modal-share-content">
                <a href={urlFace}>
                   <img src={facebook} alt="Icone do Facebook"/>
                   <p>Facebook</p>
                </a>
             </li>
             <li className="modal-share-content">
                <a href={urlTwitter}>
                   <img src={twitter} alt="Icone do twitter"/>
                   <p>Twitter</p>
                </a>
             </li>
             <li className="modal-share-content">
                <a href={urlWpp}>
                   <img src={Wpp} alt="Icone do Whatsapp"/>
                   <p>WhatsApp</p>
                </a>
             </li>
            </ul>
        </div>
    )
}
