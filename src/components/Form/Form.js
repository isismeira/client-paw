import { useState } from 'react';

function Form({ nomeDigitado }) {
  const [nome, setNome] = useState("");

  const aoAdicionar = () => {
    if (nome.trim()) {
      nomeDigitado(nome);
      setNome(""); // Limpa o campo de input após adicionar
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um nome"
      />      
      <button onClick={aoAdicionar}>Adicionar</button>
    </div>
  );
}

export default Form;
