import React from 'react';
import './ItemRegistrado.css'

function ItemRegistrado({ registro, onEdit, onDelete }) {
  return (
    <div className="container">
    <li >
      <div className="Registro">
        <strong> Nome:</strong> {registro.nome}
      </div>
      <div className="Registro">
        <strong> Animal:</strong> {registro.animal}
      </div>
      <div className="Registro"> 
        <strong> Raça:</strong> {registro.raca}
      </div>
      <div className="Registro"> 
        <strong> Telefone:</strong> {registro.telefone}
      </div>
      <button className='botao1' onClick={onEdit} style={{ marginLeft: '10px' }}>
        Editar
      </button>
      <button className='botao2' onClick={onDelete} style={{ marginLeft: '10px' }}>
        Deletar
      </button>
    </li>
    </div>
  );
}

export default ItemRegistrado;

