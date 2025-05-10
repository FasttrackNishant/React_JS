import React, { Component} from 'react';


export default class AddContact extends Component {
           
  state = {
    name:"",
    mobile:""
  };

  Add = (e) => {

    e.preventDefault();
    if(this.state.name === "" || this.state.mobile === ""){
      alert("Enter All the fields!");
      return;
    }
    
    this.props.contactHandler(this.state);
    this.setState({name:"", mobile:""})
    
  }
  render() {
    return (
      
        <div className='addcontact-div'>
          <form  className='form-div' onSubmit={this.Add}>
            <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}></input>
            <input type="tel" placeholder="Mobile Number" value={this.state.mobile} onChange={(e) => this.setState({mobile:e.target.value})}></input>
            <button className='addbtn'>Add Contact</button>
            </form>
        </div>
      
    );
  }
}
