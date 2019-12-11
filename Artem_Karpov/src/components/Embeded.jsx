import React from "react";

export class Embeded extends React.Component {
    componentWillMount() {
        console.log('embeded componentWillMount');
    }
    render() {
        return (
            <div>text of embeded component counter: {this.props.counter}</div>
        )
    }
}
