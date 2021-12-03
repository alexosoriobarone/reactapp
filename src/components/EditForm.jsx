import React,{Component} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description:'',
            category:'',
            price:0,
            qty:0,
            _id:''
        }
        this.updateProduct=this.updateProduct.bind(this);
        
    }
    componentDidMount() {
        const {proData}=this.props;
        if(proData!==null){
            this.setState({description:proData.description,
                category:proData.category,price:proData.price,
            qty:proData.qty,_id:proData._id});
        }
    }
    componentDidUpdate(prevProps) {
        const {proData}=this.props;
       if(this.props!==prevProps){
        this.setState({description:proData.description,
            category:proData.category,price:proData.price,
        qty:proData.qty,_id:proData._id});
       }
    }
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    updateProduct=(event)=>{
        event.preventDefault();
        let url=`http://localhost:8021/api/v1/products/update/${this.state._id}`;
        let dtaPro={
            description:this.state.description,price:this.state.price,
            category:this.state.category,
        qty:this.state.qty};
        const requestData={
            method:'PUT',
            body:JSON.stringify(dtaPro),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        fetch(url, requestData).
        then((res)=>res.json()).then((data)=>{
            const showalert = withReactContent(Swal);
            showalert.fire({
                title:'Information',
                text:data.status,
                footer:'App react'
            });
            this.props.updateList();
        });

    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <form  className="row" >
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={this.state.description} className="form-control"  name="description" id="description" onChange={this.handleInputChange}/>
                    </div>
                <div className="mb-3">
                <label htmlFor="price">Price</label>
                <input type="number" value={this.state.price} className="form-control"  name="price" id="price" onChange={this.handleInputChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="category">Category</label>
                <select value={this.state.category} className="form-control" id="category" name="category"  onChange={this.handleInputChange}>
                    <option value="Deporte"  >Deporte</option>
                    <option value="Casual" >Casual</option>
                    <option value="Familiar" >Familiar</option>
                    <option value="Dormitorio" >Dormitorio</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="qty">Quantity</label>
                <input value={this.state.qty} type="number" className="form-control"  name="qty" id="qty" onChange={this.handleInputChange}/>
                </div>
                <input type="hidden" value={this.state._id} name="_id" id='_id'/>
                <div className="col">
                <button onClick={this.updateProduct} className='btn btn-success btn-lg' type="button" >Update!</button>
                </div>
            </form>
        </div>
            </React.Fragment>
        );
    }
}
export default EditForm;