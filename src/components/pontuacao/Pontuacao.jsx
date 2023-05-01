import "./Pontuacao.css";

function Pontuacao({ pontuacoes }) {
  return (
    <div className="Pontuacao">
      <div>
        <span>Empate</span>
        <br />
        <span>{pontuacoes.x}</span>
      </div>
      <div>
        <span>Jogador</span>
        <br />
        <span>{pontuacoes.empate}</span>
      </div>
      <div>
        <span>Computador</span>
        <br />
        <span>{pontuacoes.o}</span>
      </div>
    </div>
  );
}

export default Pontuacao;