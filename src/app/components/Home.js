import React from "react";

export class Home extends React.Component{
    render(){

        let text = "My Component";

        return (
            <div>
                <p> {text} </p>
                <p> Your name is {this.props.name}, yout age is {this.props.age}</p>
                <p> User Object => Name : {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map( (data,key) => <li key={key}> {data} </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}