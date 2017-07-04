import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Content from '../content/Content';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}