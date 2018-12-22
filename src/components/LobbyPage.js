import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PlayerItem from './PlayerItem';
import Fade from 'react-reveal/Fade';

export class LobbyPage extends React.Component {
    render() {
        return (
            <div className="content-container">
                {this.props.type === "" && <Redirect to="/" />}
                <Fade>
                    <div>
                        <div className="list-header">
                            <div><h2 className={"box-layout__title"}>Waiting for players</h2></div>
                            <div><h2 className={"box-layout__title"}>Room Code: <b>{this.props.room}</b></h2></div>
                        </div>

                        <div className="player">
                            {
                                this.props.players.length === 0 ? ""
                                    : this.props.players.map((player) => {
                                        return <PlayerItem key={player.name} name={player.name} colour={player.colour} />
                                    })
                            }
                        </div>
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