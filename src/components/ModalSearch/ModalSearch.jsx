import React, {useState} from 'react'
import "./styles.css"
import Search from "../../assets/icons/Search.svg";

export default function ModalSearch({status,handleModalSearch,filterDadosAnimais}) {
    const [search, setValueSearch] = useState("");

    const handleSearch = (event)=>{
        let value = event.target.value;
        setValueSearch(value);
    }

    const searchAnimais = (event)=>{
        event.preventDefault();
        filterDadosAnimais(search);
        handleModalSearch("inative");
    }

    return (
        <div className="modal">
        <div className={`${"modal-"+status}`} onClick={()=>handleModalSearch("inative")}>
            
        </div>
        <div className={`${"modal-search-"+status}`}>
        <form onSubmit={searchAnimais}>
            <input type="text" placeholder="Pesquisar pets" value={search} onChange={handleSearch}/>
            <button type="submit"><img src={Search} width="30px" alt="Pesquisar" /></button>
        </form>
    </div>
    </div>
    )

   
}
