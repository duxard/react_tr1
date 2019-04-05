import React from 'react';

export default class StatelessComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div>
                <h4>Stateless Component</h4>
            </div>
        );
    }
}