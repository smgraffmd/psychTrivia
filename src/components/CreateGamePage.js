import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../app';

export class CreateGamePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            room: "",
            category: 0
        }
    }

    onRoomChange = (e) => {
        const room = e.target.value;
        this.setState({ room });
    };

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState({category})
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.room);
    };


    render() {
        return (
            <div className="content-container">
                <div className="box-layout__box">

                    <form className="form" onSubmit={this.submitForm}>
                        <h1 className={"box-layout__title"}>Create New Game</h1>
                        <input
                            type="text"
                            placeholder="Room Name"
                            autoFocus
                            value={this.state.room}
                            onChange={this.onRoomChange}
                            className="text-input"
                        />
                        <select className="select" value={this.state.category} onChange={this.onCategoryChange}>
                            <option key={0} value={0}>All Categories</option>
                            {
                                this.props.categories.map((category) => {
                                    return <option key={category.id} value={category.id}>{category.name}</option>
                                })
                            }
                        </select>
                        <button className="button">Create</button>

                    </form>


                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    categories: state.game.categories
})


export default connect(mapStateToProps)(CreateGamePage);