import React,{Component} from 'react';

import './Producto.css';
class ProductoView extends Component {
   constructor(props) {
       super(props);
       this.handleInputChange = this.handleInputChange.bind(this);
       this.enviarDatos = this.enviarDatos.bind(this);
       this.state= {
           update:false,
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
    
    event.preventDefault();
    const { onLoad } = this.props;
    let datos={description:this.state.description,
    price:parseInt(this.state.price),category:this.state.category,
     qty:parseInt(this.state.qty)};//Object

     let options={
         method:'POST',
         body:JSON.stringify(datos),
         headers:{
            "Content-type": "application/json; charset=UTF-8"
         }
     };

     fetch('http://localhost:8021/api/v1/products/add',options)
     .then((res)=>
         res.json()
     ).then((data)=>{
         alert(data.status);
         onLoad();
     }).catch(console.error);

   }
   
   render() {
       const {onLoad }=this.props;
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
 
        
    
        
 
  
   </React.Fragment>
   );
   }
}
    export default ProductoView;