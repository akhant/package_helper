import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Navs extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  render() {
    return (
      <Nav bsStyle="pills" stacked>
        {this.props.data.map(item => (
          <NavItem
            onClick={this._onChooseTab}
            key={item.tabKey}
            data-key={item.tabKey}
            eventKey={item.tabKey}
          >
            {item.name}
          </NavItem>
        ))}
      </Nav>
    );
  }
}
