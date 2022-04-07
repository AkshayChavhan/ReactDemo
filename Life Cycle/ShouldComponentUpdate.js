import React from 'react';


export default class ShouldComponentUpdate extends React.Component {
    constructor() {
        console.log('constructor');
        super();
        this.state = {
            place: "kashmir",
            incidance: "Kashmir Files"
        }
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate',this.state.place ,this.state.incidance)
        return true;   //state will changfe but not reflect in dom if it return nothing i.e false
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>place  {this.state.place} and indidance is {this.state.incidance}</h1>
                <button onClick={() => this.setState({ place: "nagpur", incidance: "none" })}>Reviels it</button>
            </div>
        )
    }
}