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
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar userType="user" active="dashboard"/>
                <div className="content-wrapper">
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
