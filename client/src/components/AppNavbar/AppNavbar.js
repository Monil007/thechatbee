import React, { Component } from "react";
import { Link } from "react-router-dom";
import beeicon from "../../assets/beeicon.ico";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Collapse,
  NavbarToggler,
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar style={navbarStyle} dark expand="sm" className="mb-2">
          {/* <Container> */}
          <NavbarBrand style={navbrandStyle} href="/">
            <img
              src={beeicon}
              alt="bee img"
              style={{ width: 100, height: 100 }}
            />
            The Chat Bee
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={navItemStyle}>
                <Link to={"/About"}>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem style={navItemStyle}>
                <NavLink href="https://github.com/Monil007/thechatbee">
                  Git Repository
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}

const navbrandStyle = {
  padding: "0.75rem",
  color: "rgb(255, 215, 103)",
  fontSize: "2.5rem",
  fontWeight: "700",
  fontFamily: "Georgia",
  float: "right",
  backgroundColor: "Navy",
};

const navbarStyle = {
  backgroundColor: "navy",
};

const imgStyle = {
  width: "5rem",
  heigth: "5rem",
};

const navItemStyle = {
  fontSize: "1.5rem",
};

export default AppNavbar;
