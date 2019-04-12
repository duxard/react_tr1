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
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        axios.get('https://asta-web-1.herokuapp.com/api/todo', {timeout: 1500}).then(response => {
            let resultOfRestRequest = response.data;
            
            this.setState({todos: resultOfRestRequest}, () => {
                console.log(this.state.todos);
            });
        }).catch(error => {
            console.error(error);
            document.getElementById("todosLoadingStatus").setAttribute("class", "red");
            this.setState({
                todosLoadingStatus: "Failed to load data from heroku REST"
            });
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        axios.post('https://asta-web-1.herokuapp.com/api/todo', {item: this.state.inputText}).then(response => {
            if(response.status === 200 && response.statusText === 'OK') {
                console.log(`HerokuList.handleSubmit(): Sending data to MongoDB: Success`);
                let newArrayOfTodos = [...this.state.todos, {_id: response.data._id, item: response.data.item}];
                this.setState({
                    todos: newArrayOfTodos
                });
            } else {
                throw new Error(`Server response status: ${response.status}`);
            }           
        }).catch(error => console.error(`Failed to save to Mongo: ${error}`));
        this.setState({
            inputText: ""
        });
    }
    
    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }
    
    handleDelete(e){
        let removeItemId = e.target.parentElement.getAttribute("data-itemid");
        axios.delete(`https://asta-web-1.herokuapp.com/api/todo/${removeItemId}`).then(response => {
            if(response.status === 200 && response.statusText === 'OK') {
                console.log(`HerokuList.handleDelete(): Deleting from MongoDB: Success`);
                let index = this.state.todos.findIndex(el => el._id === removeItemId);
                let newArrayOfTodos = this.state.todos;
                newArrayOfTodos.splice(index, 1); 
                this.setState({
                    todos: newArrayOfTodos
                });
            } else {
                throw new Error(`Server response status: ${response.status}`);
            }
        }).catch(error => console.error(`Failed to delete from Mongo: ${error}`));
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
                            this.state.todos.map((item, index) => {
                                return (<li key={index} data-itemid={item._id}>{item.item} <button onClick={this.handleDelete}>Delete</button></li>)
                            })
                        ) : (
                            <p id="todosLoadingStatus">{this.state.todosLoadingStatus}</p>
                        )
                    }
                </ul>
            </div>
        );
    }
}