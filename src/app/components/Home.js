import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
         age: props.initialAge,
         name: props.name,
         hobbies: props.user.hobbies,
         name_user: props.user.name,
         homeLink: "Changed link",
         status: 0,
            homeLink: props.initialLinkName
        },setTimeout(() => {
            this.setState({
               status: 10
            });
        },3000)

        console.log(props);

    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillMount(){
        console.log("Component will Mount");
    }

    componentDidMount(){
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps){
        console.log("Compnent will props", nextProps);
    }

    onMakeOlder(){
        this.setState({
            name: this.state.name = 'Isabel',
            age: this.state.age + 3,
            name_user: this.state.name_user = 'Felipe',
            hobbies: this.state.hobbies.add = [1,2,3,4,5],
            status : this.state.status += 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink : event.target.value
        });
    }

    render(){
        return (
            <div>
                <p> Your name is {this.state.name}, yout age is {this.state.age}</p>
                <p> User Object => Name : {this.state.name_user}</p>
                <p> Status : {this.state.status}</p>
                <ul>
                    {this.state.hobbies.map( (data, k) => <li key={k}> {data} </li> )}
                </ul>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary"> Make me older! </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-danger"> Greet </button>
                <hr/>
                <input type="text" value={this.props.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={() => this.onChangeLink()} className="btn btn-danger"> Change header link</button>
                <hr/>
            </div>
        );
    }
}

Home.PropTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    status: React.PropTypes.number,
    hobbies: React.PropTypes.array,
    greet: React.PropTypes.func,
    initialLink: React.PropTypes.string
};