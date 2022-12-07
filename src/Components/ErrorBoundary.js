import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.state({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return(<h1>ERROR, restaurant failed to load.</h1>);
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;