import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel} from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';
// import styling and assets
import '../../assets/css/user/dashboard.css';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar userType="user" active="profile"/>
                <div className="content-wrapper">
                    <FeelingToday/>
                    <div className="experiences">
                        <Panel className="previous-experiences">
                            <Panel.Body>
                                <div className="header">
                                    <h3 className="title">Previous Experiences</h3>
                                    <Button bsStyle="primary" bsSize="small">See all</Button>
                                </div>
                            </Panel.Body>
                        </Panel>
                        <Panel className="upcoming-experiences">
                            <Panel.Body>
                                <div className="header">
                                    <h3 className="title">Upcoming Experiences</h3>
                                    <Button bsStyle="primary" bsSize="small">See all</Button>
                                </div>
                            </Panel.Body>
                        </Panel>
                    </div>
                    <div className="recommended-experiences-container">
                        <Panel className="recommended-experiences">
                            <Panel.Body>
                                <div className="header">
                                    <h3 className="title">Recommended Experiences</h3>
                                    <Button bsStyle="primary" bsSize="small">See all</Button>
                                </div>
                            </Panel.Body>
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
