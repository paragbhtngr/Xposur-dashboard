import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

export default class XperienceItem extends Component {
  render() {
    return (
        <div>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                </Panel.Heading>
                    <NavLink to="/user/xperiences/1">
                        <img src="http://placehold.it/140x140" style={{maxWidth:'100%'}} />
                        <h3>Event Title </h3>
                    </NavLink>
            </Panel>
        </div>
    )
  }
}
