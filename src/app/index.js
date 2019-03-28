import React from 'react';
import ReactDOM from 'react-dom';

import Contacts from './components/contacts';

class App extends React.Component {
    constructor(...args){
        super(...args);

        this.contactsList=['Alex', 'John'];
    }

    render(){
        return (
            <div>
                <h2>test</h2>
                <Contacts names={this.contactsList} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("wrapper"));