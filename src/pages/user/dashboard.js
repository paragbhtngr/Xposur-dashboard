import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel} from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';
import PreviousXperiences from './components/previousXperiences';
import UpcomingXperiences from './components/upcomingXperiences';
import RecommendedXperiences from './components/recommendedXperiences';

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
                <Sidebar userType="user" active="dashboard" minimized={this.state.minimize}/>
                <div className={"content-wrapper " + (this.state.minimize ? "maximized" : "")}>
                    <FeelingToday/>
                    <div className="xperiences">
                        <PreviousXperiences/>
                        <UpcomingXperiences/>
                    </div>
                    <RecommendedXperiences/>
                </div>
            </div>
        );
    }
}

export default Login;
