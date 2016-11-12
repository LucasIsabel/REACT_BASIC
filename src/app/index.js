import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import {Aside} from "./components/Aside";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            homeLink : "Home",
            homeMounted: true
        }
    }

    onGreet(){
        alert('Hello');
    }

    onChangeLinkName(newName){
        this.setState({
          homeLink: newName
        })
    }

    onAlertMessage(){
        alert('Ths is my message nigga');
    }

    render(){

        let user = {
            name: "Lucas",
            hobbies : ["Sports","Cook","Drink","Play Games"]
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                                name={"Max"}
                                initialAge={27}
                                user={user}
                                greet={this.onGreet}
                                changeLink={ () => this.onChangeLinkName(this.state.homeLink)}
                                initialLinkName={this.state.homeLink}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Aside action={this.onAlertMessage} btnName={"Botao ASIDE"}/>
                    </div>
                </div>
            </div>
        );
    };
}

render(<App/>, window.document.getElementById("app"));