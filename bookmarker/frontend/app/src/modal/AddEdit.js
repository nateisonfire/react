import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
//import style from '../style';

export default class AddEdit extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            name: 'google',
            url: '',
            desc: '',
            fav: false
        };
        this.submit = this.submit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        //this.props.handleClick = this.props.handleClick.bind(this);
    }

    getTitle() {
        return this.props.value + ' Bookmark';
    }

    FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    submit() {
        // is it add or edit?
        if (this.props.value === 'Add'){
            console.log('Add');
        }else if (this.props.value === 'Edit'){
            console.log('Edit');
        }else{
            console.log('error');
        }
    }
    
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.showModal} onHide={this.props.handleClick}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.getTitle()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <this.FieldGroup type="text" label="Bookmark Name" placeholder="Enter a Bookmark Name" value={this.state.name} onChange={this.handleNameChange} />
                            <this.FieldGroup type="text" label="URL" placeholder="Enter a URL" />
                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Enter a description about the Bookmark" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Favourite?</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClick}>Close</Button>
                        <Button onClick={this.submit} bsStyle="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}