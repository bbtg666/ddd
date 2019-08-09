import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken"

import "./TopMenu.css";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div style={{ color: "#333" }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink
              style={{
                margin: "0px",
                padding: "0px"
              }}
            >
              <div className="">
                <Link className="d-flex navbar-brand " to="/">
                  <img
                    src="https://image.flaticon.com/icons/svg/854/854878.svg"
                    alt="icon"
                    width="32"
                    height="32"
                    className="ml-3"
                  />
                </Link>
              </div>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/live">Live</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/aboutus">About Us</Link>
                </NavLink>
              </NavItem>
              <NavLink>
                <Link to="/login">{!sessionStorage.getItem('user') ? "Đăng nhập" : jwt.decode(sessionStorage.getItem('user'), 'giang').name}</Link>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
