import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel} from 'react-bootstrap';
import Moment from 'react-moment';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';


import data from '../../data';

// import styling and assets
import '../../assets/css/user/dashboard.css';
import '../../assets/css/user/messages.css';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            minimize: false,
            activeChat: null,
            data: data,
            activeMessageData: [{
                text: "Hey man, what's up? You going for that thing later?",
                from: true,
                unread: false,
                date: '2018-04-18 14:24:35',
            },
            {
                text: "Not sure... you?",
                from: false,
                unread: false,
                date: '2018-04-18 14:26:35',
            },
            {
                text: "Yeah man! you should come check it out :D",
                from: true,
                unread: false,
                date: '2018-04-18 14:28:35',
            },{
                text: "You'd have fun!",
                from: true,
                unread: false,
                date: '2018-04-18 14:28:37',
            },
            ]
        }

    }

    toggleSidebar = () => {
        this.setState({minimize: !this.state.minimize})
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} minimized={this.state.minimize}/>
                <Sidebar userType="user" active="messages" minimized={this.state.minimize}/>
                <div className={"content-wrapper " + (this.state.minimize ? "maximized" : "")}>
                    <FeelingToday/>
                    <div className="message-container">
                        <div className="messages-sidebar">
                            <ul className="messages">
                                {this.state.data.messages.map((msg, i) => {
                                    return(
                                        <li className={"message-item "+ (msg.unread? "unread " : "") + (this.state.activeChat === i? "active ": "")} onClick={() => {
                                            console.log("pressed "+i)
                                            let tempData = this.state.data
                                            tempData.messages[i].unread = false
                                            this.setState({
                                                activeChat: i,
                                                data: tempData
                                            })
                                        }}>
                                            <div className="img-container">
                                                <img src={require("../../assets/images/users/" + msg.fromProfilePic)} alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <p className="msg-sender">{msg.from}</p>
                                                <p className="msg-text">{msg.text}</p>
                                                <p className="msg-time"><Moment fromNow date={msg.date}/></p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="message-window">
                            {this.state.activeMessageData.map((msg) => {
                                return(
                                    <div className={"message-box-container " + (msg.from? "from ": "to ")}>
                                        <div className={"message-box " + (msg.unread? "unread ": "")}>
                                            <span>{msg.text}</span>
                                            <p className="msg-time"><Moment fromNow date={msg.date} format="h:m a"/></p>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="message-input">
                            <FormControl
                                componentClass="textarea"
                                value={this.state.value}
                                placeholder="Enter text"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
