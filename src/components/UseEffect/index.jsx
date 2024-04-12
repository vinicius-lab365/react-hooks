import { useEffect, useState } from "react";

function UseEffect() {
  // Exemplo segundos na página
  const [secondsInThePage, setSecondsInThePage] = useState(0);

  // Exemplo eseEffect com fetch
  const [user, setUser] = useState();

  // Exemplo segundos na página
  useEffect(() => {
    setTimeout(() => {
      setSecondsInThePage(secondsInThePage + 1);
    }, 1000);
  }, [secondsInThePage]); // Se o array parmanecer vazio ele executara a renderização apenas ao corregar a página

  // // Exemplo eseEffect com fetch --> executa no carregamento da página pois o Array de dependencias etá vazio
  useEffect(() => {
    fetch("https://api.github.com/users/vinicius-lab365")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <h2>UseEffect</h2>
      <h3>Sintaxe:</h3>
      <h3>
        <code>useEffect(callback, dependências);</code>
      </h3>
      <h4>Parâmetros:</h4>
      <ul>
        <li>
          <b>callback</b>: função a ser executada quando o valor de uma
          dependência for alterado
        </li>
        <li>
          <b>dependências</b>: um array de valores a ser observado, se o array
          for vazio o useEffect será executado na primeira renderização do
          componente, já se você não passar esse propriedade o useEffect será
          executado a cada renderização do componente.
        </li>
      </ul>

      <p>
        Permitem lidar de maneira simples com efeitos colaterais durante o ciclo
        de vida do componente;
      </p>
      <hr />
      <h3>Exemplo Tempo de página</h3>
      <p>
        Graças ao useEffect, assim que você entrou na página o contador abaixo
        foi iniciado e indica que você permaneceu nessa página por{" "}
        <b>{secondsInThePage}</b> segundos
      </p>
      <hr />

      <h3>Exemplo eseEffect com fetch</h3>
      {user && (
         <div>
         <h1>Dados do usuário</h1>
         <h2>Nome: {user.name}</h2>
         <p>
           {user.location}
         </p>
         <img src={user.avatar_url} alt="Imagem de Vinícius Bitencourt Pereira" />
       </div>
      )}


    </div>
  );
}

export default UseEffect;
