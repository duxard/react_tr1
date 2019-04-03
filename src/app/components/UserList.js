import React from 'react';

let arrUsersList = ["one"];

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
            arrUsersList.push(textToAdd);
            this.setState({
                users: arrUsersList
            });
        } else {
            alert("input field cannot be empty");
        }
        
        this.addText.value = "";
    }
    
    handleRemove(e) {
        let elementToRemove = +e.target.parentElement.getAttribute("data-number");
        arrUsersList.splice(elementToRemove, 1);
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
                                <li key={index} data-number={index}>{user}<button onClick={this.handleRemove}>Remove</button></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
