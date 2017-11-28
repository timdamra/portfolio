import React from 'react';
import { Link } from 'react-router-dom';

export default class NavTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      screen: window.innerWidth
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleSize);
  }
  handleSize() {
    this.setState({
      screen: window.innerWidth
    });
  }
  handleToggle() {
    let bool = !this.state.isOpen;
    this.setState({
      isOpen: bool
    });
  }
  closeMenu() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    if (!this.state.isOpen || this.state.screen > 767) {
      return (
        <div className="main">
          <div className="wrapper">
            <Link to="/" className="link menu-item">
              Home
            </Link>
            <Link to="/portfolio" className="link menu-item">
              Portfolio
            </Link>
            <Link to="/skills" className="link menu-item">
              Skills
            </Link>
          </div>
          <a onClick={this.handleToggle} className="icon">
            &#9776;
          </a>
        </div>
      );
    }
    return (
      <div>
        <div className="main">
          <div />
          <a onClick={this.handleToggle} className="icon">
            &#9776;
          </a>
        </div>
        <div className="menu-opened">
          <div>
            <Link onClick={this.closeMenu} to="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link onClick={this.closeMenu} to="/portfolio" className="link">
              Portfolio
            </Link>
          </div>
          <div>
            <Link onClick={this.closeMenu} to="/aboutme" className="link">
              About Me
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
