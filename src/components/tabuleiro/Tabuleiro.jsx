import { useState } from "react";
import Square from "../Square/Square";
import "./Tabuleiro.css";

function Tabuleiro({ setScores }) {
  const [no, setNo] = useState({});
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(""));
  const [linha, setLinha] = useState([]);

  const resetarJogo = () => {
    setLinha([]);
    setTabuleiro(Array(9).fill(""));
  };

  const getJogadasPossiveis = (tabuleiro) => {
    const movimento = [];
    tabuleiro.forEach((cell, index) => {
      if (!cell) movimento.push(index);
    });
    return movimento;
  };

  const handleClick = (id) => {
    if (
      isTerminal(tabuleiro).vencedor === "X" ||
      isTerminal(tabuleiro).vecedor === "O" ||
      isCheio(tabuleiro)
    ) {
      resetarJogo();
      return;
    }

    if (tabuleiro[id] !== "") return;

    let tabuleiroEditado = [...tabuleiro];
    tabuleiroEditado[id] = "X";

    setTabuleiro(tabuleiroEditado);

    if (isTerminal(tabuleiroEditado).vencedor === "X") {
      console.log(isTerminal(tabuleiroEditado));
      setLinha(isTerminal(tabuleiroEditado).linha);
<<<<<<< HEAD
      setPontuacoes((anterior) => ({ ...anterior, espaco: anterior.espaco + 1 }));
=======
      setPontuacoes((anterior) => ({ ...anterior, x: anterior.x + 1 }));
>>>>>>> 1d4d20a0f1308d09af5ebf9b8b931bfa1a4061a6
      return;
    }

    let numeroAtual = getMelhorJogada(tabuleiroEditado, 0, false);
    if (tabuleiroEditado[numeroAtual] === "") {
        tabuleiroEditado[numeroAtual] = "O";
    }

    setTabuleiro(tabuleiroEditado);

    if (isTerminal(tabuleiroEditado).vencedor === "O") {
      setLinha(isTerminal(tabuleiroEditado).linha);
      setPontuacoes((anterior) => ({ ...anterior, o: anterior.o + 1 }));
      return;
    }

    if (isTerminal(tabuleiroEditado).vencedor === "Desenho") {
      setPontuacoes((anterior) => ({ ...anterior, x: anterior.x + 1 }));
    }
  };

  const isVazio = (tabuleiro) => {
    return tabuleiro.every((celula) => !celula);
  };

  const isCheio = (tabuleiro) => {
    return tabuleiro.every((celula) => celula);
  };

  const isTerminal = (tabuleiro) => {
    if (isVazio(tabuleiro)) return false;

    if (tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2] && tabuleiro[0]) {
      return { vencedor: tabuleiro[0], linha: [0, 1, 2] };
    }
    if (tabuleiro[3] === tabuleiro[4] && tabuleiro[3] === tabuleiro[5] && tabuleiro[3]) {
      return { vencedor: tabuleiro[3], linha: [3, 4, 5] };
    }
    if (tabuleiro[6] === tabuleiro[7] && tabuleiro[6] === tabuleiro[8] && tabuleiro[6]) {
      return { vencedor: tabuleiro[6], linha: [6, 7, 8] };
    }

    if (tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6] && tabuleiro[0]) {
      return { vencedor: tabuleiro[0], linha: [0, 3, 6] };
    }
    if (tabuleiro[1] === tabuleiro[4] && tabuleiro[1] === tabuleiro[7] && tabuleiro[1]) {
      return { vencedor: tabuleiro[1], linha: [1, 4, 7] };
    }
    if (tabuleiro[2] === tabuleiro[5] && tabuleiro[2] === tabuleiro[8] && tabuleiro[2]) {
      return { vencedor: tabuleiro[2], linha: [2, 5, 8] };
    }

    if (tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8] && tabuleiro[0]) {
      return { vencedor: tabuleiro[0], linha: [0, 4, 8] };
    }
    if (tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6] && tabuleiro[2]) {
      return { vencedor: tabuleiro[2], linha: [2, 4, 6] };
    }

    if (isFull(tabuleiro)) {
      return { vencedor: "Desenho" };
    }

    return false;
  };

  const getMelhorJogada = (newtabuleiro, depth, isCheio, callback = () => {}) => {
    if (depth === 0) setNo({});

    if (isTerminal(newtabuleiro) || depth === -1) {
      if (isTerminal(newtabuleiro).vencedor === "X") {
        return 100 - depth;
      } else if (isTerminal(newtabuleiro).vencedor === "O") {
        return -100 + depth;
      }
      return 0;
    }

    if (isMaximo) {
      let melhor = -100;

      getJogadasPossiveis(newtabuleiro).forEach((index) => {
        let filho = [...newtabuleiro];
        filho[index] = "X";

        let pontuacao = getBestMove(filho, depth + 1, false, callback);
        melhor = Math.max(melhor, pontuacao);
      });

      return melhor;
    }

    if (!isMaximo) {
      let melhor = 100;

      getJogadasPossiveis(newtabuleiro).forEach((index) => {
        let filho = [...newtabuleiro];
        filho[index] = "O";

        let pontuacao = getMelhorJogada(filho, depth + 1, true, callback);
        melhor = Math.min(melhor, pontuacao);

        if (depth === 0) {
          console.log(no);
          const jogadas = no[pontuacao] ? `${no[pontuacao]},${index}` : index;
          no[pontuacao] = jogadas;
        }
      });
      if (depth === 0) {
        let returnValor;

        if (typeof no[melhor] === "String") {
          const arr = no[melhor].split(",");
          const rand = Math.floor(Math.random() * arr.length);
          returnValor = arr[rand];
        } else {
          returnValor = no[melhor];
        }

        callback(returnValor);
        return returnValor;
      }
      return melhor;
    }
  };

  return (
    <div className="tabuleiro">
      {tabuleiro.map((val, i) => {
        return (
          <Square
            key={i}
            id={i}
            value={val}
            handleClick={handleClick}
            tabuleiro={linha}
          />
        );
      })}
    </div>
  );
}

export default Tabuleiro;