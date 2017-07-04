import React from 'react';
import { Navbar } from 'react-bootstrap'

export default class Footer extends React.Component {
    render() {
        return (
            <Navbar fixedBottom={true}>
                <Navbar.Text pullRight>&copy; Nate</Navbar.Text>
            </Navbar>
            /*<div className="fixedBottom" style={style.footer}>
                <span>&copy; Nate</span>
            </div>*/
        )
    }
}