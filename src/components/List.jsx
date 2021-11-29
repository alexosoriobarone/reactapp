import React,{Component} from 'react';
import {Loading} from './Loading';
import Item from './Item';
import getProducts from '../API/Api';
import ProductView from './ProductView';
export default class List extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            isLoading: false,
            products:null
        };
        this.loadProds=this.loadProds.bind(this);
    }
    componentDidMount() {
        this.loadProds();
       
       
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
       return (
           <React.Fragment>
                <ProductView  onLoad={this.loadProds}></ProductView>
               <div>
                   {
                     products &&  products.map((ite,i)=>{
                        return(<Item key={i} data={ite}></Item>)
                       })
                   }
               </div>
              
           </React.Fragment>
       );
   }
}