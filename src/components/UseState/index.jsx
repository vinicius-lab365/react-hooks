import { useState } from "react";

function UseState() {
  // Exemplo contador
  const [count, setCount] = useState(0);

  function renderCount() {
    setCount((initialValue) => initialValue + 1);
  }
  ///////////////////////////////////////////////////////

  // Exemplo nome via input

  const [name, setName] = useState("User"); // User é o valor padrão da primeira renderização

  function changeName(e) {
    setName(e.target.value);
  }
  ////////////////////////////////////////////////////////

  return (
    <div>
      <h1>React Hooks</h1>
      <br />

      <h2>useState</h2>
      <p>
        Hook  Built-in (Tradução: Integrado) que gerencia o estado de um componente e em cada
        renderização exibe o novo valor do estado na tela ao recarregar a tela
        os valores voltarão para default{" "}
      </p>
      <span>
       <b>useState</b> declara uma variável de estado que você pode atualizar
       diretamente.
      </span>

      <h3>Sintaxe:</h3>
      <h3><code>const [index, setIndex] = useState(0)</code></h3>
      <hr />

      <h4>Exemplo Contador:</h4>
      <p>
        Clique no botão abaixo e verás que o valor do contador mudará (uma nova
        renderização será efetuada) a cada click.{" "}
      </p>
      <p>O valor do contador é: <b>{count}</b></p>
      <button onClick={() => renderCount()}>Incrementar</button>
      <hr />

      <h4>Exemplo Nome via input:</h4>
      <p>Seu nome é: {name}</p>
      Digite seu nome aqui:
      <div>
        <input type="text" value={name} onChange={(e) => changeName(e)} />
      </div>
    </div>
  );
}

export default UseState;