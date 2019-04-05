import React from 'react';
import axios from 'axios';

export default class HerokuList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: []
        };
    }
    
    componentDidMount() {
        axios.get('https://asta-web-1.herokuapp.com/api/todo', {timeout: 1500}).then((response) => {
            let resultOfRestRequest = response.data;
            this.setState({todos: resultOfRestRequest.data}, () => {
                console.log(this.state.todos);
            });
        }).catch(function(error){
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <h4>Heroku list...</h4>
                <ul id="list">
                </ul>
            </div>
        );
    }
}