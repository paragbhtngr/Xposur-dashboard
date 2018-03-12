import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../../assets/css/login/login.css';
import logo from '../../assets/images/logo.png';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: null,
            password: null,
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="panel panel-default login-card">
                    <img className="logo" src={logo} alt=""/>
                    <h2>Xposur Login</h2>
                    <form>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon> <i class="fas fa-at"></i> </InputGroup.Addon>
                                    <FormControl 
                                        className="login-email" 
                                        placeholder="Email address" 
                                        type="text" 
                                        value={this.state.email}
                                        onChange={(e) => {
                                            this.setState({email: e.target.value})
                                        }}
                                    />
                                </InputGroup>
                            <InputGroup>
                                <InputGroup.Addon> <i class="fas fa-key"></i> </InputGroup.Addon>
                                    <FormControl className="login-password"  placeholder="Password" type="password"/>
                                </InputGroup>
                            <Button 
                                bsStyle="primary" block
                                onClick={() => {
                                    switch(this.state.email) {
                                        case "user":
                                            this.props.history.push('/user/dashboard');
                                            break;
                                        case "vendor":
                                            this.props.history.push('/vendor/dashboard');
                                            break;
                                        case "hr":
                                            this.props.history.push('/hr/dashboard');
                                            break;
                                    }
                                }}
                            >Login</Button>
                        </FormGroup>
                    </form>
                    <p>Forgot Password? <NavLink to="/password-reset">Click here to reset it</NavLink> </p>
                </div>
            </div>
        );
    }
}

export default Login;
