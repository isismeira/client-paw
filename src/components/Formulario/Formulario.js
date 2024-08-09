import React from 'react';

function Formulario({ form, onChange, onSubmit, isEditing }) {
  return (
    <div>
      <input 
        type="text"
        name="nome"
        value={form.nome}
        onChange={onChange}
        placeholder="Digite um nome"
      />
      <input 
        type="text"
        name="animal"
        value={form.animal}
        onChange={onChange}
        placeholder="Digite um animal"
      />
      <input 
        type="text"
        name="raca"
        value={form.raca}
        onChange={onChange}
        placeholder="Digite uma raça"
      />
      <input 
        type="text"
        name="telefone"
        value={form.telefone}
        onChange={onChange}
        placeholder="Digite um telefone"
      />
      <button onClick={onSubmit}>
        {isEditing ? "Salvar Edição" : "Adicionar"}
      </button>
    </div>
  );
}

export default Formulario;

