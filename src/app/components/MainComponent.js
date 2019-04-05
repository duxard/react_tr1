import React from 'react';
import '../css/mainComponent.css';

import ParentAndChild from './ParentAndChild';
import ControlledList from './ControlledList';
import UncontrolledList from './UncontrolledList';
import FilteredList from './FilteredList';
import AxiosUsage from './AxiosUsage';
import ComponentWithChildren from './ComponentWithChildren';
import UserList from './UserList';
import HerokuList from './HerokuList';
import StatelessComponent from './StatelessComponent';

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
            console.log(`MainComponent.componentDidMount(): ${this.state.fruitList}`);
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
                <UserList />
                    
                <hr />
                <HerokuList />
                    
                <hr />
                <StatelessComponent user={"Woo Bih"} age={25} admin={true} />

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

                <hr />
                <ComponentWithChildren name={"Joshua"} age={20}>
                    <p>Nested child components</p>
                </ComponentWithChildren>
            </div>
        );
    }
}
