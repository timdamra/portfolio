import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
  background-color: silver;
  width: 100%;
  height: 70px;
`;

const NavLg = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    max-width: 80%;
    margin: auto;
  }
`;

const NavIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    width: 20%;
    height: 60px;
    background-image: url("/assets/html-tag-png-image-86501.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavSpan = styled.div`
  display: inline-block;
  margin: 8px;
  padding: 4px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
    border-bottom: 1px solid black;
    transition-property: background-color;
    transition-duration: 0.6s;
    transition-delay: 0.1s;

    &:hover {
      cursor: pointer;
      background-color: silver;
    }
  }
`;

export default class NavMenu extends Component {
  state = {
    isOpen: false
  }
  handleClick = () => {
    const flag = !this.state.isOpen;

    this.setState(() => {
      return { isOpen: flag };
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <NavDiv>
          <NavIcon onClick={this.handleClick} />
          <NavLg>
            <NavSpan>
              <Link to="/">HOME</Link>
            </NavSpan>
            <NavSpan>
              <Link to="/portfolio">PORTFOLIO</Link>
            </NavSpan>
            <NavSpan>
              <Link to="/skills">SKILLS</Link>
            </NavSpan>
          </NavLg>
        </NavDiv>
        {this.state.isOpen
          ? <NavMobile>
              <NavSpan>
                <Link to="/">HOME</Link>
              </NavSpan>
              <NavSpan>
                <Link to="/portfolio">PORTFOLIO</Link>
              </NavSpan>
              <NavSpan>
                <Link to="/skills">SKILLS</Link>
              </NavSpan>
            </NavMobile>
          : false}
      </div>
    );
  }
}
