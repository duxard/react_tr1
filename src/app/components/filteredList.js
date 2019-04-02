import React from 'react';

//...external source of data
let usersMainlist = ["Ivan", "Petr", "Dima", "Pavel"];

export default class FilteredList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
        
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            users: usersMainlist
        });
    }
    
    handleSearch(e) {
        let filteredList = usersMainlist.filter(item => {
            return ~item.toLowerCase().indexOf(this.searchText.value.toLowerCase());
        });
        
        this.setState({
            users: filteredList
        });
    }
    
    render(){
        return (
            <div>
                <h4>Filtered input</h4>
                <form name="myThirdForm"  >
                    <input type="text" ref={input => this.searchText = input} onChange={this.handleSearch} />
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