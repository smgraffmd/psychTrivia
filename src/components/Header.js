import React from 'react';
import {Link} from 'react-router-dom';



export const Header = () => (
    <header className={"header"}>
        <div className={"content-container"}>
            <div className={"header__content"}>
                <Link  className={"header__title"} to="/"><h1>OpenTrivia</h1></Link>
                <button className="button--link button ">About</button>
            </div>
        </div>
    </header>
);


export default (Header);