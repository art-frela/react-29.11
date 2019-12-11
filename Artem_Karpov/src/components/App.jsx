import React from "react";
import { Embeded } from "./Embeded";

export class App extends React.Component {
    state = {
        data: "data text of the state",
        counter: 0,
    };

    handleClick = () => {
        this.setState( (prevState) => { return {'counter': prevState.counter + 1 }})
    };

    componentWillMount() {
        console.log('componentWillMount');
    }
    render(){
        setTimeout(() => this.setState({ 'data': 'Обновленный React-компонент' }), 1000);
        return (
            <div>
                <h1>{this.state.data}</h1>
                <Embeded counter={this.state.counter}/>
                <button onClick={this.handleClick}>+1 above</button>
            </div>
        )
    }
}
