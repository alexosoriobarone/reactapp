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
        setTimeout(() =>{
            this.setState({isLoading:false,products:[{name:'Azucar'},{name:'Panela'},{name:'Pan'}]});
        },1000);
        

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