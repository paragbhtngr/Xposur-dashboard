import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel} from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';
// import styling and assets
import '../../assets/css/user/dashboard.css';

export default class Xperiences extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            xperienceId: this.props.match.params.xperienceId
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar userType="user" active="xperiences"/>
                <div className="content-wrapper">
                </div>
            </div>
        );
    }
}

