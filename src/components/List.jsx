import React,{Component} from 'react';
import {Loading} from './Loading';
import Item from './Item';

export class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            products:null
        };
    }
    componentDidMount() {
        this.setState({isLoading:true});
       fetch('http://localhost:8021/api/v1/products')
       .then((pro)=>
           pro.json()
       ).then((data)=>{
        this.setState({isLoading:false,products:data});  
       });
       
        
        

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