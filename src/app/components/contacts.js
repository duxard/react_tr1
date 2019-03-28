import React from 'react';

export default class Contacts extends React.Component {

    componentDidMount(){
        console.log( this.props.names );
    }

    render(){
        return (
            <div>
                <h2>Contacts page</h2>
            </div>
        );
    }
}
