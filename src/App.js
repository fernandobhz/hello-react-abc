import React, { useState } from "react";

import "./App.css";

function HoraAtual() {
  return <div>{new Date().toISOString()}</div>;
}

class Fogao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      porta: ` quando crescer eu decido `,
      cor: Math.random().toString(36).slice(-5),
    };

    // this.abrirPorta = this.abrirPorta.bind(this);
    // this.fecharPorta = this.fecharPorta.bind(this);
  }

  fecharPorta() {
    this.setState({
      ...this.state,
      porta: `fechada`,
    });
  }

  abrirPorta() {
    this.setState({
      ...this.state,
      porta: `aberta`,
    });
  }

  render() {
    return (
      <div>
        <div>
          A fogao está com o forno {this.state.porta} minha cor é{" "}
          {this.state.cor}
        </div>
        <button onClick={this.fecharPorta.bind(this)}>
          Fechar a porta do forno
        </button>
        <button onClick={this.abrirPorta.bind(this)}>
          Abrir a porta do forno
        </button>
      </div>
    );
  }
}

const Geladeira = () => {
  const [porta, setPorta] = useState("fechada");
  const [cor, setCor] = useState("cor");

  const fecharPorta = () => setPorta(`fechada`);
  const abrirPorta = () => setPorta(`aberta`);

  return (
    <div>
      <div>A geldeira está {porta}</div>
      <button onClick={fecharPorta}>Fechar a porta</button>
      <button onClick={abrirPorta}>Abrir a porta</button>
    </div>
  );
};

function DuasLinhas() {
  return (
    <>
      <tr>
        <td>Fernando</td>
        <td>35</td>
      </tr>
      <tr>
        <td>Ian</td>
        <td>30</td>
      </tr>
    </>
  );
}

function Person({nome, idade}) {
  return (
    <tr>
      <td>{nome}</td>
      <td>{idade}</td>
    </tr>
  );
}

function Mult({b}) {
  const a = Number(Math.random().toString().slice(-1));

  return (
    <div>
      A: {a} x B: {b} = {a*b}
    </div>
  )
}

function ValorAtt({quandoValorMudar1 = () => {}}) {
  const [valor, setValor] = useState(55);
  const [valor2, setValor2] = useState(55);

  const mudouValor1 = () => {
    quandoValorMudar1(valor)
  }

  return (
    <>
      <div>O valor é '{valor}', o novo valor será <input value={valor} onChange={event => setValor(event.target.value)} /><button onClick={mudouValor1}>Gritar para o mundo que o valor mudou</button></div>
      <div>O valor é '{valor2}', o novo valor será <input value={valor2} onChange={event => setValor2(event.target.value)} /><button onClick={() => alert(valor2)}>Usa o valor</button></div>
      <hr />
    </>
  )
}

function App() {

  const [tudao, setTudao ] = useState([1,2,3]);

  const adicionarNoLogAlteracaoDeValor = valor => {
    setTudao([...tudao, valor])
  }

  return (
    <div>
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      <ValorAtt quandoValorMudar1={adicionarNoLogAlteracaoDeValor} />
      
      <pre>
        {JSON.stringify(tudao, null, 2)}
      </pre>
      
      <Mult b={30} />
      <table border="1" cellSpacing="10">
        <thead>
          <th>Nome</th>
          <th>Idade</th>
        </thead>
        <tbody>
          <DuasLinhas />
          <Person nome="Murilo" idade={35} />
          <Person nome={"Kaue"} idade={35} />
        </tbody>
      </table>
      <div>Olá mundo.</div>
      <div>Ola tudo bem</div>
      <HoraAtual />
      <HoraAtual />
      <HoraAtual />
      <HoraAtual />
      <HoraAtual />
      <br />
      <br />
      <br />
      <Geladeira />
      <Geladeira />
      <Geladeira />
      <Geladeira />
      <Geladeira />
      <Geladeira />
      <br />
      <br />
      <br />
      <Fogao />
      <Fogao />
      <Fogao />
      <Fogao />
      <Fogao />
    </div>
  );
}

export default App;
