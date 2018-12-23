import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Players from './Players';
import { socket } from '../app';
import QuestionOptions from './QuestionOptions';
import { setMessage } from '../actions/game';

export class QuestionPage extends React.Component {

    submitAnswer = (e) => {
        const ans = e.target.value;
        console.log(ans);
        socket.emit("submitAnswer", ans, (res) => {

            if (res.code === "correct") {
                console.log(res.score);
                this.props.setMessage(`Correct, Your score is ${res.score}`);
                //this.props.history.push("/result");
            } else if (res.code === "incorrect") {
                console.log(res.correct);
                this.props.setMessage(`Incorrect, The correct answer was ${res.correct} Your score is ${res.score}`);
                //this.props.history.push("/result");
            }
        });
    };

    render() {
        return (
            <div className="content-container">
                {this.props.type === "" && <Redirect to="/" />}
                <Fade>
                    <div>
                        {
                            this.props.message === "" ?
                                <div>
                                    <div className="list-header">
                                        <h2 className={"box-layout__title"}>{this.props.question.question}</h2>
                                    </div>

                                    <QuestionOptions type={this.props.type} message={this.props.question.message} submitAnswer={this.submitAnswer} options={this.props.question.options} />
                                    {this.props.type === "HOST" && <Players players={this.props.players}/>}
                                </div>
                                :
                                <div>
                                    <Fade>
                                        <div className="box-layout__box">
                                            <h3 className="box-layout__title">{this.props.message}</h3>
                                        </div>
                                    </Fade>
                                </div>
                        }
                    </div>

                </Fade>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    question: state.game.question,
    type: state.type,
    players: state.players,
    message: state.game.message
});

const mapDispatchToProps = (dispatch) => ({
    setMessage: (msg) => dispatch(setMessage(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);