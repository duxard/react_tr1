import React from 'react';
import axios from 'axios';

export default class HerokuList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: []
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        axios.get('https://asta-web-1.herokuapp.com/api/todo', {timeout: 1500}).then((response) => {
            let resultOfRestRequest = response.data;
            
            this.setState({todos: resultOfRestRequest}, () => {
                console.log(this.state.todos);
            });
        }).catch(function(error){
            console.log(error);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h4>Heroku list...</h4>
                <form name="herokuList" onSubmit={this.handleSubmit}>
                    <label htmlFor="newHerokyItem">Add item: </label>
                    <input type="text" id="newHerokyItem" />
                    <input type="submit"  value="Add new item" />                    
                </form>
                <ul id="list">
                    {
                        this.state.todos.map((item, index) => <li key={index} data-itemid={item._id}>{item.item}</li>)
                    }
                </ul>
            </div>
        );
    }
}