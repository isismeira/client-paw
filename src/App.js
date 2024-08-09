import { useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  const [nomes, setNomes] = useState([]);

  const adicionarNome = (nomeDigitado) => {
    setNomes([...nomes, nomeDigitado]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Nomes</h1>
      
      {/* Componente Form para adicionar novos nomes */}
      <Form nomeDigitado={adicionarNome} />
      
      {/* Componente List para exibir os nomes cadastrados */}
      <List nomes={nomes} />
    </div>
  );
}

export default App;

