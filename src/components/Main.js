import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab, Row, Col, Nav, Grid, NavItem, Button } from "react-bootstrap";
import data from "../data";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this._stateDev = this.state.textDev;
    this._state = this.state.text;
  }
  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };
  state = {
    textDev: "yarn add --dev",
    text: "yarn add",
    activeTab: "1"
  };

  _addText = (target, text) => {
    if (target.checked) return `${text.trim()} ${target.value}`;
    return text.replace(new RegExp(`${target.value}(?!-)`, "g"), "");
  };

  _onBoxChange = e => {
    let target;
    if (e.target) {
      target = e.target;
    } else {
      target = e;
    }

    let valDev = this.state.textDev;
    let val = this.state.text;

    if (target.dataset.dev === "true") {
      valDev = this._addText(target, valDev);
    } else {
      val = this._addText(target, val);
    }
    this.setState({
      textDev: valDev,
      text: val
    });
  };

  _addAll = target => {
    if (target.dataset.dev === "true") {
      if (
        this._stateDev.search(new RegExp(`${target.value}(?!-)`, "g")) == -1
      ) {
        this._stateDev += ` ${target.value}`;
      }
    } else {
      if (this._state.search(new RegExp(`${target.value}(?!-)`, "g")) == -1) {
        this._state += ` ${target.value}`;
      }
    }

    this.setState({
      textDev: this._stateDev,
      text: this._state
    });
  };
  //lookbehind doesn't work in firefox, add changing via array
  _clearAll = target => {
    this._stateDev = this._stateDev.replace(
      new RegExp(`(?<!-)(${target.value})(?!-)`, "g"),
      ""
    );
    this._state = this._state.replace(
      new RegExp(`(?<!-)(${target.value})(?!-)`, "g"),
      ""
    );
    this.setState({
      textDev: this._stateDev,
      text: this._state
    });
  };

  _onChooseTab = e => {
    this.setState({
      activeTab: e.target.dataset.key
    });
  };

  _chooseOrClear = x => {
    const inputs = document.querySelectorAll(
      `input[data-tabkey='${this.state.activeTab}']`
    );
    const arr = [];
    for (let i = 0; i < inputs.length; i++) {
      if (typeof inputs[i] === "object") {
        inputs[i].checked = x;
        arr.push(inputs[i]);
      }
    }
    return arr;
  };

  _onClickChoseAll = () => {
    this._chooseOrClear(true).map(input => {
      this._addAll(input);
    });
  };

  _onClickClearAll = () => {
    this._chooseOrClear(false).map(input => {
      this._clearAll(input);
    });
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12}>
              <Tab.Container id="tabs" defaultActiveKey="1">
                <Row className="clearfix">
                  <Col sm={4}>
                    <Nav bsStyle="pills" stacked>
                      {data.map(item => (
                        <NavItem
                          onClick={this._onChooseTab}
                          key={item.tabKey}
                          data-key={item.tabKey}
                          /* ref={this.Ref} */
                          eventKey={item.tabKey}
                        >
                          {item.name}
                        </NavItem>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content animation>
                      {data.map(item => (
                        <Tab.Pane key={item.tabKey} eventKey={item.tabKey}>
                          {item.value.map(value => (
                            <div key={value.key}>
                              <input
                                type="checkbox"
                                id={value.name}
                                value={value.name}
                                data-tabkey={item.tabKey}
                                data-dev={value.dev}
                                onChange={this._onBoxChange}
                              />
                              <label htmlFor={value.name}>{value.name}</label>
                            </div>
                          ))}
                        </Tab.Pane>
                      ))}
                      <Button bsStyle="primary" onClick={this._onClickChoseAll}>
                        Choose All
                      </Button>
                      <Button bsStyle="primary" onClick={this._onClickClearAll}>
                        Clear All
                      </Button>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div>
                <p
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid black"
                  }}
                >
                  {" "}
                  {this.state.text}{" "}
                </p>
              </div>
              <div>
                <p
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid black"
                  }}
                >
                  {" "}
                  {this.state.textDev}{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
