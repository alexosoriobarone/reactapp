import React  from 'react';
import PropTypes from 'prop-types';
const Item=({data})=> (<div>{data.name}</div>);
Item.propTypes = {
 data:PropTypes.object.isRequired,
 
};
export default Item;