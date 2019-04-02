import React from 'react';

export default class UncontrolledList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            fruit : ['apple', 'orange', 'pear']
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let newFruit = this.inputText.value;
        this.setState({
            fruit: [...this.state.fruit, newFruit]
        });
        this.inputText.value = "";
    }
    
    render(){
        return (
            <div>
                <h4>Uncontrolled input</h4>
                <form name="mySecondForm" onSubmit={this.handleSubmit} >
                    <input type="text" ref={input => this.inputText = input} />
                    <input type="submit" />
                </form>
                <ul>
                    {
                        this.state.fruit.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}