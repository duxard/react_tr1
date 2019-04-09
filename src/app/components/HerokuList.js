import React from 'react';
import axios from 'axios';

import '../css/herokuList.css';

export default class HerokuList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: [],
            inputText: "",
            todosLoadingStatus: "Loading list..."
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        axios.get('https://asta-web-1.herokuapp.com/api/todo', {timeout: 1500}).then(response => {
            let resultOfRestRequest = response.data;
            
            this.setState({todos: resultOfRestRequest}, () => {
                console.log(this.state.todos);
            });
        }).catch(error => {
            console.log(error);
            document.getElementById("todosLoadingStatus").setAttribute("class", "red");
            this.setState({
                todosLoadingStatus: "Failed to load data from heroku REST"
            });
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        axios.post('https://asta-web-1.herokuapp.com/api/todo', {item: this.state.inputText}).then(response => {
            console.log(`HerokuList.handleSubmit(): Sending data to MongoDB: Success`);
        }).catch(error => console.log(`Failed to save to Mongo: ${error}`));
        this.setState({
            inputText: ""
        });
    }
    
    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }
    
    render() {
        return (
            <div>
                <h4>Heroku list...</h4>
                <form name="herokuList" onSubmit={this.handleSubmit}>
                    <label htmlFor="newHerokyItem">Add item: </label>
                    <input type="text" id="newHerokyItem" value={this.state.inputText} onChange={this.handleChange} />
                    <input type="submit"  value="Add new item" />                    
                </form>
                <ul id="list">
                    {
                        this.state.todos.length ? (
                            this.state.todos.map((item, index) => <li key={index} data-itemid={item._id}>{item.item}</li>)
                        ) : (
                            <p id="todosLoadingStatus">{this.state.todosLoadingStatus}</p>
                        )
                    }
                </ul>
            </div>
        );
    }
}