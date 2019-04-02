import React from 'react';

export default class ControlledList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inputValue: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputValue);
        this.setState({
            inputValue: ""
        });
    }
    
    render(){
        return (
            <div>
                <h4>Controlled input</h4>
                <form name="myform" onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}