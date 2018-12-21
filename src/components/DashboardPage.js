import React from 'react';
import { connect } from 'react-redux';
import { setHost, setPlayer } from '../actions/clientType';


export class DashboardPage extends React.Component {

    startAsHost = () => {
        this.props.setHost();
        this.props.history.push("/create");
    };

    startAsPlayer = () => {
        this.props.setPlayer();
        this.props.history.push("/join");
    };


    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">OpenTrivia</h1>
                    <div className="box-layout__button-container">
                        <div className="box-layout__button">
                            <button className="button" onClick={this.startAsHost}>Create Game</button>
                        </div>

                        <div className="box-layout__button">
                            <button className="button" onClick={this.startAsPlayer}>Join Game</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHost: () => dispatch(setHost()),
        setPlayer: () => dispatch(setPlayer())
    }
}

export default connect(undefined, mapDispatchToProps)(DashboardPage);