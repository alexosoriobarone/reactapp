import React  from 'react';
import PropTypes from 'prop-types';
const Item=({data,onUpdate})=>{ 
    const editForm=(value,e)=>{
       e.preventDefault();
      onUpdate(value);
      
    }
    return (
      <tr>
        <td>{data._id}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td>{data.qty}</td>
        <td><button type="button" className="btn btn-danger">
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