import React from 'react';
import { Redirect } from 'react-router-dom';
import { socket } from '../app';


export class Header extends React.Component {
    
    handleClick = () => {
        socket.disconnect();
        socket.connect();
        this.props.history.push("/");
    }
    
    render() {
        return (
            <header className={"header"}>
                <div className={"content-container"}>
                    <div className={"header__content"}>
                        <button className={"header__title button--link button"} onClick={this.handleClick}><h1>OpenTrivia</h1></button>
                        <button className="button--link button ">About</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default (Header);