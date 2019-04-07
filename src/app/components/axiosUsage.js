import React from 'react';
import axios from 'axios';

import '../css/axiousUsage.css';

export default class AxiosUsage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    
    getTypeClass(obj) {
        return Object.prototype.toString(obj).slice(8,-1);
    }
    
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2', {timeout: 1500}).then((response) => {
            let resultOfRestRequest = response.data;
            this.setState({users: resultOfRestRequest.data}, function(){
                console.log(`AxiosUsage.componentDidMount(): ${this.state.users}`);
            });
            
        }).catch(function(error){
            console.log(error);
        });
    }
    
    render(){
        return (
            <div>
                <h4>Axios usage:</h4>
                <ul>
                    {
                        this.state.users.map((user, index) => <li key={index}><span className="restUser">REST user:</span> {user.first_name} {user.last_name}</li>)
                    }
                </ul>
            </div>
        );
    }
}