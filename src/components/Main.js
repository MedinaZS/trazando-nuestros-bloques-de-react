import React, {Component} from 'react';

class Main extends Component{
    render(){
        return ( <main className='flexContainer'> {this.props.children} </main> );
    }
}

export default Main;