import React,{Component,useState} from 'react';
import './Producto.css';
class ProductoView extends Component {
   constructor(props) {
       super(props);
       this.handleInputChange = this.handleInputChange.bind(this);
       this.enviarDatos = this.enviarDatos.bind(this);
       this.state= {
           description:'',
           price:0,
           qty:0,
           category:''
       }
   }
    handleInputChange = (event) => {
    let name=event.target.name;
    // console.log(event.target.value)
    this.setState({[name]:event.target.value});
}
   
   enviarDatos=(event)=>{
       console.log(this.state.category);
    event.preventDefault();
   

   }
   
   render() {
   return (<React.Fragment>
    <form className="producto" onSubmit={this.enviarDatos}>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={this.handleInputChange}/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" onChange={this.handleInputChange}/>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={this.handleInputChange}>
                <option value="Deporte"  >Deporte</option>
                <option value="Casual" >Casual</option>
                <option value="Familiar" >Familiar</option>
                <option value="Dormitorio" >Dormitorio</option>
            </select>
            <label htmlFor="qty">Quantity</label>
            <input type="number" name="qty" id="qty" onChange={this.handleInputChange}/>
            <input type="submit" value="Save!"/>
       
    </form>
   <span>{this.state.description}</span>
   </React.Fragment>
   );
   }
}
    export default ProductoView;