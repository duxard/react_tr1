import React from 'react';
import '../css/mainComponent.css';

import ParentAndChild from './ParentAndChild';
import ControlledList from './ControlledList';
import UncontrolledList from './UncontrolledList';
import FilteredList from './FilteredList';
import AxiosUsage from './AxiosUsage';

const fruit = ["pear", "apple", "plum", "kiwi"];

export default class MainComponent extends React.Component {

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
                <h4>Main page</h4>
                <p>Owners: {this.props.names[0]} : {this.props.names[1]}</p>
                <ul id="list">
                    {
                        this.state.fruitList.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
        
                <hr />
                <ParentAndChild /> 
                    
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
