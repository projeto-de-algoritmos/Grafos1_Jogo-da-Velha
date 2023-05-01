import "./Game.css";
import { useState } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import Pontuacao from "../Pontuacao/Pontuacao";

function Jogo() {
  
  const [pontuacoes, setPontuacoes] = useState({
    x: 0,
    o: 0,
    espaco: 0,
  });

  return (
    <div className="Jogo">
      <Tabuleiro setPontuacoes={setPontuacoes}/>
      <Pontuacao pontuacoes={pontuacoes}/>
    </div>
  );
}

export default Jogo;
