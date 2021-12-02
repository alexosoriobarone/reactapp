import React,{Component} from 'react';
import {Loading} from './Loading';
import Item from './Item';
import {getProducts} from '../API/Api';
import ProductView from './ProductView';
import EditForm from './EditForm';
export default class List extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            isLoading: false,
            products:null,
            isUpdate:false,
            product:{price:0,decription:'',category:'',qty:0}
        };
        this.loadProds=this.loadProds.bind(this);
        this.updateForm=this.updateForm.bind(this);
    }
    componentDidMount() {//cuando se monta el componente. por primer vez
        this.loadProds(); 
    }
    updateForm=(datos)=>{
        this.setState({isUpdate:true,product:datos});
        
    }
     loadProds=() => {
        this.setState({isLoading:true});
        let data=getProducts();
        data.then((pro)=>{
            this.setState({isLoading:false,products:pro}); 
        }).catch(console.error); 
     }
   render() {
       const {isLoading,products} = this.state;
       if(isLoading){
       return (
        <div>
            <Loading message='Cargando datos, espere por favor'></Loading>
        </div>
       );
       }
       const renderForm=()=>{
        if(!this.state.isUpdate){
        return( <ProductView   onLoad={this.loadProds}></ProductView>);
        }else{
            return (<EditForm proData={this.state.product}></EditForm>);
        }
       }
       return (
           <React.Fragment>
               {
                renderForm()   
               }
               <div>
                   <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                     products &&  products.map((ite,i)=>{
                        return(<Item onUpdate={this.updateForm}  key={i} data={ite}></Item>)
                       })
                   }
                   </tbody>
                  </table>
               </div>
              
           </React.Fragment>
       );
   }
}