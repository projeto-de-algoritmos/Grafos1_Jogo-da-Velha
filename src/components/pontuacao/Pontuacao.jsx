import "./Pontuacao.css";

function Pontuacao({ pontuacoes }) {
  return (
    <div className="Pontuacoes">
      <div>
        <span>Jogador</span>
        <br />
        <span>{pontuacoes.x}</span>
      </div>
      <div>
        <span>Espaco</span>
        <br />
        <span>{pontuacoes.espaco}</span>
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