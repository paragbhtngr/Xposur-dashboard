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
            minimize: false
        }

    }

    toggleSidebar = () => {
        this.setState({minimize: !this.state.minimize})
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} minimized={this.state.minimize}/>
                <Sidebar userType="user" active="latestnews" minimized={this.state.minimize}/>
                <div className={"content-wrapper " + (this.state.minimize ? "maximized" : "")}>
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
