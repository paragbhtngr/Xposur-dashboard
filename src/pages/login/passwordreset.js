import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import '../../assets/css/login/login.css';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap'

class PasswordReset extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="panel panel-default login-card">
                    <h2>Password Reset</h2>
                    <form>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon> <i class="fas fa-at"></i> </InputGroup.Addon>
                                <FormControl className="login-email" placeholder="Email address" type="text"/>
                            </InputGroup> 
                            <Button bsStyle="primary" block>Reset Password</Button>
                        </FormGroup>
                    </form>
                    <NavLink to="/">Back to Login Page</NavLink>
                </div>
            </div>
        );
    }
}

export default PasswordReset;
