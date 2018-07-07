import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab, Row, Col, Nav, Grid, NavItem, Button } from "react-bootstrap";
import _ from "lodash";
import Text from "./Text";
import data from "../data";

export default class Main extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  static defaultProps = {
    data: []
  };
  constructor(props) {
    super(props);
    this._stateDev = this.state.textDev;
    this._state = this.state.text;
  }
  state = {
    textDev: ["yarn", "add", "--dev"],
    text: ["yarn", "add"],
    activeTab: "1"
  };

  _addText = (target, text) => {
    if (target.checked) {
      text.push(target.value);
      return text;
    }
    return _.pull(text, target.value);
  };

  _onBoxChange = e => {
    const { target } = e;

    let valDev = this.state.textDev;
    let val = this.state.text;

    if (target.dataset.dev === "true") {
      valDev = this._addText(target, this.state.textDev);
    } else {
      val = this._addText(target, this.state.text);
    }
    this.setState({
      textDev: valDev,
      text: val
    });
  };

  _addAll = target => {
    if (target.dataset.dev === "true") {
      if (!_.find(this._stateDev, o => o === target.value))
        this._stateDev.push(target.value);
    } else {
      if (!_.find(this._state, o => o === target.value))
        this._state.push(target.value);
    }

    this.setState({
      textDev: this._stateDev,
      text: this._state
    });
  };

  _clearAll = target => {
    _.pull(this._stateDev, target.value);
    _.pull(this._state, target.value);

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

  _removeAllChecked = x => {
    const inputs = document.querySelectorAll(`input[data-dev='${x}']`);
    for (let i = 0; i < inputs.length; i++) {
      if (typeof inputs[i] === "object") {
        inputs[i].checked = false;
      }
    }
  };

  _onClickMegaClearDev = () => {
    this._removeAllChecked(true);
    this.setState({
      textDev: ["yarn", "add", "--dev"]
    });
  };

  _onClickMegaClear = () => {
    this._removeAllChecked(false);
    this.setState({
      text: ["yarn", "add"]
    });
  };

  _onClickCopy = e => {
    let text;
    if (e.target.dataset.dev === "true") {
      text = this.state.textDev.join(' ');
    } else {
      text = this.state.text.join(' ');
    }
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Tab.Container id="tabs" defaultActiveKey="1">
                <Row className="clearfix">
                  <Col xs={4}>
                    <Nav bsStyle="pills" stacked>
                      {data.map(item => (
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
                  </Col>
                  <Col xs={8}>
                    <Tab.Content animation>
                      {data.map(item => (
                        <Tab.Pane key={item.tabKey} eventKey={item.tabKey}>
                          {item.value.map(value => (
                            <div className="input_wrapper" key={value.key}>
                              <div className="squaredThree">
                                <input
                                  className="input_check"
                                  type="checkbox"
                                  id={value.name}
                                  value={value.name}
                                  data-tabkey={item.tabKey}
                                  data-dev={value.dev}
                                  onChange={this._onBoxChange}
                                />
                                <label htmlFor={value.name} />
                              </div>
                              <label className="label-for" htmlFor={value.name}>
                                {value.name}
                              </label>
                            </div>
                          ))}
                        </Tab.Pane>
                      ))}
                      <Button
                        className="tab_btn"
                        bsStyle="primary"
                        onClick={this._onClickChoseAll}
                      >
                        Choose All
                      </Button>
                      <Button
                        className="tab_btn"
                        bsStyle="primary"
                        onClick={this._onClickClearAll}
                      >
                        Clear All
                      </Button>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Text
                _onClickCopy={this._onClickCopy}
                _onClickMegaClear={this._onClickMegaClear}
                _onClickMegaClearDev={this._onClickMegaClearDev}
                text={this.state.text}
                textDev={this.state.textDev}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
