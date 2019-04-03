import React from 'react';
import PropTypes from 'prop-types';

export default class ComponentWithChildren extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4>Component with children:</h4>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            
                {this.props.children}
            </div>
        );
    }
}

ComponentWithChildren.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};