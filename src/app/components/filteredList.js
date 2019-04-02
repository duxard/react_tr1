import React from 'react';

export default class FilteredList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }
    
    componentDidMount() {
        this.setState({
            users: ["u1", "u2"]
        });
    }
    
    
    render(){
        return (
            <div>
                <h4>Filtered input</h4>
                <form name="myThirdForm"  >
                    
                </form>
                <ul>
                    {
                        this.state.users.map((item, index) => <li key={index}>{item}</li>)    
                    }
                </ul>
            </div>
        );
    }
}