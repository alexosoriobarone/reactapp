import React  from 'react';
import PropTypes from 'prop-types';
const Item=({data,onUpdate,onDelete})=>{ 
    const editForm=(value,e)=>{
       e.preventDefault();
      onUpdate(value);
      
    }
    const deletePro=(id,e)=>{
      e.preventDefault();
      onDelete(id);
    }
    return (
      <tr>
        <td>{data._id}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td>{data.qty}</td>
        <td><button type="button" onClick={(e)=>deletePro(data._id,e)} className="btn btn-danger">
          Eliminar
          </button>
          <button type="button" onClick={(e)=>editForm(data,e)} className="btn btn-primary">
            Editar
          </button>
          </td>
      </tr>
    );
};
Item.propTypes = {
 data:PropTypes.object.isRequired,
 
};

export default Item;