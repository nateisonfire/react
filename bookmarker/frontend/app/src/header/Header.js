import React from 'react';
import { Button } from 'react-bootstrap';
import AddEdit from '../modal/AddEdit';
import style from '../style';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {showModal: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //console.log((!this.state.showModal)? 'show':'hide');
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return (
            <div style={style.header}>
                <span style={style.addButton}>
                    <Button bsStyle="primary" onClick={this.handleClick}>Add a Bookmark</Button>
                </span>
                <h3 style={style.title}>Bookmarker</h3>

                <AddEdit value="Add" handleClick={this.handleClick} showModal={this.state.showModal} />
            </div>
        )
    }
}