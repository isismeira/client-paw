import React from 'react';
import ItemRegistrado from '../ItemRegistrado/ItemRegistrado';
import './ListaDeRegistros.css'

function ListaDeRegistro({ registros, onEdit, onDelete }) {
  return (
    <ul type="none">
      {registros.map((registro, index) => (
        <ItemRegistrado
          key={index}
          registro={registro}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default ListaDeRegistro;
