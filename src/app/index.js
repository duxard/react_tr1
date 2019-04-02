import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './components/MainComponent';

class App extends React.Component {
    constructor(...args){
        super(...args);

        this.contactsList=['Alex', 'John'];
    }

    render(){
        return (
            <div>
                <MainComponent names={this.contactsList} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("wrapper"));