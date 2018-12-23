import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Players from './Players';
import { socket } from '../app';
import QuestionOptions from './QuestionOptions';

export class QuestionPage extends React.Component {


    submitAnswer = (e) => {
        const ans = e.target.value;
        console.log(ans)
    }

    render() {
        return (
            <div className="content-container">
                {this.props.type === "" && <Redirect to="/" />}

                <div className="list-header">
                    <h2 className={"box-layout__title"}>{this.props.question.question}</h2>
                </div>

                <QuestionOptions type={this.props.type} message={this.props.question.message} submitAnswer={this.submitAnswer} options={this.props.question.options}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    question: state.game.question,
    type: state.type,
    players: state.players
});

export default connect(mapStateToProps)(QuestionPage);