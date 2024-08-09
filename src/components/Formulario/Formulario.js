import React from 'react';
import './Formulario.css'

function Formulario({ form, onChange, onSubmit, isEditing }) {
  return (
    <div className="Formulario">
      <h1> Insira aqui os dados do pet</h1>
      <input
        className="Input"
        type="text"
        name="nome"
        value={form.nome}
        onChange={onChange}
        placeholder="Digite um nome"
      />
      <input 
        className="Input"
        type="text"
        name="animal"
        value={form.animal}
        onChange={onChange}
        placeholder="Digite um animal"
      />
      <input 
        className="Input"
        type="text"
        name="raca"
        value={form.raca}
        onChange={onChange}
        placeholder="Digite uma raça"
      />
      <input
       className="Input" 
        type="text"
        name="telefone"
        value={form.telefone}
        onChange={onChange}
        placeholder="Digite um telefone"
      />
      <button className="Botao" onClick={onSubmit}>
        {isEditing ? "Salvar Edição" : "Adicionar"}
      </button>
    </div>
  );
}

export default Formulario;

