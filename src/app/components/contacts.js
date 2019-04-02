import React from 'react';
import '../css/contacts.css';

import TodoList from './todoList';
import ControlledList from './controlledList';
import UncontrolledList from './uncontrolledList';
import FilteredList from './filteredList';
import AxiosUsage from './axiosUsage';

const fruit = ["pear", "apple", "plum", "kiwi"];

export default class Contacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fruitList: []
        };
    }

    componentDidMount(){
        this.setState({
            fruitList: fruit
        }, function(){
            console.log(this.state.fruitList);
        });
    }

    render(){
        return (
            <div>
                <h2>Contacts page</h2>
                <p>Owners: {this.props.names[0]} : {this.props.names[1]}</p>
                <ul id="list">
                    {
                        this.state.fruitList.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>

                <hr />
                <h3>Component with children:</h3>

                <hr />
                <TodoList /> 
                    
                <hr />
                <ControlledList />
                    
                <hr />
                <UncontrolledList />
                    
                <hr />
                <FilteredList />
                    
                <hr />
                <AxiosUsage />
            </div>
        );
    }
}
