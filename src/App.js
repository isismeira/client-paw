import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario/Formulario';
import ListaDeRegistros from './components/ListaDeRegistros/ListaDeRegistros';

function App() {
  const [registros, setRegistros] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    animal: "",
    raca: "",
    telefone: "",
  });
  const [editandoIndex, setEditandoIndex] = useState(null);

  const registrosIniciais = [
    { nome: "Marley", animal: "Cachorro", raca: "Labrador", telefone: "12345-6789" },
    { nome: "Manchinha", animal: "Gato", raca: "Siamês", telefone: "98765-4321" },
    { nome: "Zé", animal: "Pássaro", raca: "Canário", telefone: "55555-1234" },
  ];

  useEffect(() => {
    const registrosSalvos = JSON.parse(localStorage.getItem('registros'));
    if (registrosSalvos === null) {
      setRegistros(registrosIniciais);
      localStorage.setItem('registros', JSON.stringify(registrosIniciais));
    } else {
      setRegistros(registrosSalvos);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const adicionarOuEditarRegistro = () => {
    if (form.nome.trim() && form.animal.trim() && form.raca.trim() && form.telefone.trim()) {
      if (editandoIndex !== null) {
        const novosRegistros = [...registros];
        novosRegistros[editandoIndex] = form;
        setRegistros(novosRegistros);
        localStorage.setItem('registros', JSON.stringify(novosRegistros));
        setEditandoIndex(null);
      } else {
        const novosRegistros = [...registros, form];
        setRegistros(novosRegistros);
        localStorage.setItem('registros', JSON.stringify(novosRegistros));
      }
      setForm({ nome: "", animal: "", raca: "", telefone: "" });
    }
  };

  const editarRegistro = (index) => {
    setForm(registros[index]);
    setEditandoIndex(index);
  };

  const deletarRegistro = (index) => {
    const novosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(novosRegistros);
    localStorage.setItem('registros', JSON.stringify(novosRegistros));
    if (editandoIndex === index) {
      setForm({ nome: "", animal: "", raca: "", telefone: "" });
      setEditandoIndex(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Nomes</h1>
      <Formulario
        form={form}
        onChange={handleChange}
        onSubmit={adicionarOuEditarRegistro}
        isEditing={editandoIndex !== null}
      />
      <ListaDeRegistros
        registros={registros}
        onEdit={editarRegistro}
        onDelete={deletarRegistro}
      />
    </div>
  );
}

export default App;


