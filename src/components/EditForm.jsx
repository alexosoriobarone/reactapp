import React,{Component} from 'react';
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
    }
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
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
                <button className='btn btn-success btn-sm' type="button" >Update!</button>
            </form>
        </div>
            </React.Fragment>
        );
    }
}
export default EditForm;