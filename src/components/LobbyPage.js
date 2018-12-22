import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Players from './Players';

export class LobbyPage extends React.Component {
    render() {
        return (
            <div className="content-container">
                {this.props.type === "" && <Redirect to="/" />}
                <Fade>
                    <div>
                        <div className="list-header">
                            <h2 className={"box-layout__title"}>Waiting for players</h2>
                            {this.props.players.length > 0 && this.props.type === "HOST" && <Fade><button className="button">Start Game</button></Fade>}
                            {this.props.type === "HOST" && <h2 className={"box-layout__title"}>Room Code: <b>{this.props.room}</b></h2>}

                        </div>
                        {
                            this.props.type === "HOST" &&
                            <Players players={this.props.players} />
                        }

                    </div>
                </Fade>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    type: state.type,
    players: state.players,
    room: state.game.room
});

export default connect(mapStateToProps)(LobbyPage);