import "./Jogo.css";
import { useState } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import Pontuacao from "../Pontuacao/Pontuacao";

function Jogo() {
  
  const [pontuacoes, setPontuacao] = useState({
    x: 0,
    o: 0,
    empate: 0,
  });

  return (
    
    <div className="Jogo">
      <div className="Header">
      <span className="title"/>
      </div>
      <Tabuleiro setPontuacao ={setPontuacao}/>
      <Pontuacao pontuacoes={pontuacoes}/>
    </div>
  );
}

export default Jogo;
