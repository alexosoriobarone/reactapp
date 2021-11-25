import React,{Component} from 'react';

class ProductoView extends Component {
   constructor(props) {
       super(props);
       this.state= {
           total:0
       }
   }
   componentDidMount() {
       this.setState({total:1});
   }
   add=()=>{
    let {total} = this.state;
    total += 1; 
    this.setState({total:total});
   }
   getTotal(){
       this.state.total +=1;
   }
   render() {
   return (<div className="producto">Total: {this.state.total}
   <button onClick={this.add}>Add</button>
   </div>);
   }
}
    export default ProductoView;