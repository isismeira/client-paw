import React from 'react';

function ItemRegistrado({ registro, onEdit, onDelete }) {
  return (
    <li>
      <strong>Nome:</strong> {registro.nome}, 
      <strong> Animal:</strong> {registro.animal}, 
      <strong> Raça:</strong> {registro.raca}, 
      <strong> Telefone:</strong> {registro.telefone}
      <button onClick={onEdit} style={{ marginLeft: '10px' }}>
        Editar
      </button>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>
        Deletar
      </button>
    </li>
  );
}

export default ItemRegistrado;

