import React from 'react';

import '../css/userList.css';

let arrUsersList = [{id: (new Date).getTime(), name: "One"}];

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let textToAdd = this.addText.value.trim();
        
        if (textToAdd) {
            arrUsersList.push({
                id: (new Date).getTime(),
                name: textToAdd
            });
            this.setState({
                users: arrUsersList
            });
        } else {
            alert("input field cannot be empty");
        }
        
        this.addText.value = "";
    }
    
    handleRemove(e) {
        let dataIdAttr = +e.target.parentElement.getAttribute("data-id"),
            elementPosition = arrUsersList.map(el => el.id).indexOf(dataIdAttr);
        arrUsersList.splice(elementPosition, 1);
        this.setState({
            users: arrUsersList
        });
    }

    componentDidMount() {
        this.setState({
            users: arrUsersList
        });
    }

    render() {
        return (
            <div>
                <h4>Here one can add new items...</h4>
                <form name="myFormFourth" onSubmit={this.handleSubmit}>
                    <input type="text" ref={input => this.addText = input} />
                    <input type="submit" value="Add" />
                </form>
                <ul id="usersList">
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <li key={index} data-id={user.id}>{user.name}<button onClick={this.handleRemove}>Remove</button></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
