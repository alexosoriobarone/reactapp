import React,{Component} from 'react';
import {addProd} from '../API/Api';
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
     let status=addProd(options);
     status.then((data)=>{
         alert(data);
        onLoad();
     });
    
     /*fetch('http://localhost:8021/api/v1/products/add',options)
     .then((res)=>
         res.json()
     ).then((data)=>{
         alert(data.status);
         onLoad();
     }).catch(console.error);*/

   }
   
   render() {
   
       
   return (<React.Fragment>
       <div className="container">
    <form  className="row" >
        <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control"  name="description" id="description" onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control"  name="price" id="price" onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="category">Category</label>
            <select className="form-control" id="category" name="category"  onChange={this.handleInputChange}>
            <option value=""  selected>Select a Category</option>
                <option value="Deporte"  >Deporte</option>
                <option value="Casual" >Casual</option>
                <option value="Familiar" >Familiar</option>
                <option value="Dormitorio" >Dormitorio</option>
            </select>
            </div>
            <div className="mb-3">
            <label htmlFor="qty">Quantity</label>
            <input type="number" className="form-control"  name="qty" id="qty" onChange={this.handleInputChange}/>
            </div>
            <div className='col'>
            <button title="Save product" className='btn btn-success btn-lg' onClick={this.enviarDatos} type="button" ><i className="bi bi-check-circle"></i></button>
            </div>

    </form>
    </div>
        
    
        
 
  
   </React.Fragment>
   );
   }
}
    export default ProductoView;