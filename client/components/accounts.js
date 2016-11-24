/**
 * Created by Vladimir on 22/11/2016.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

class Accounts extends Component {

    componentDidMount() {
        // Render the blaze accounts from then find the div
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container))

    }

    componentWillUnmount() {
        // find the forms created and destroy them
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;