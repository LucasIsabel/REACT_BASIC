import React from 'react';

export class Aside extends React.Component{

    constructor(props){
        super();
        this.state = {
            btnName: props.btnName
        }
    }

    changeBtnName(){
        this.setState({
           btnName: this.state.btnName = "My new ASIDE name"
        });
    }

    render(){
        return(
            <aside>
                <hr/>
                <button onClick={() => this.changeBtnName()} className="btn btn-primary">{this.state.btnName}</button>
            </aside>
        );
    }
}

Aside.propTypes = {
    action : React.PropTypes.func
}