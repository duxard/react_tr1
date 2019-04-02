import React from 'react';

import '../css/parentAndChild.css';

export default class ParentAndChild extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleDivColor = this.toggleDivColor.bind(this);
        this.DOM = {};
    }
    
    toggleDivColor(){
        console.log("fire");
        this.DOM.targetBox.classList.toggle("blackColor");
    }
    
    componentDidMount() {
        this.DOM.targetBox = document.getElementById("targetBox");
    }
    
    render() {
        return (
            <div>
                <h4>Child component throws params to his parent</h4>
                <div id="parent">
                    <p>Box color is configured in child component:</p>
                    <div id="targetBox" className="blackColor"></div>
                </div>
            
                <ChildBoxComponent passEventToParent={this.toggleDivColor} />
            </div>
        );
    }
}

class ChildBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    
    handleBtnClick() {
        this.props.passEventToParent();
    }
    
    render() {
        return (
            <fieldset>
                <legend>Child component:</legend>
                <div id="toggler">
                    <p>Toggle color</p>
                    <button onClick={this.handleBtnClick}>Toggle</button>
                </div>
            </fieldset>
        );
    }
}