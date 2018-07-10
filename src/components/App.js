import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab, Row, Col, Grid } from "react-bootstrap";
import _ from "lodash";
import Text from "./Text";
import data from "../data";
import Tabs from "./Tabs";
import Navs from "./Navs";
import "../assets/styles/bootstrap.css";
import "../assets/styles/styles.sass";

export default class App extends Component {
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

  _onClickChooseAll = () => {
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
      text = this.state.textDev.join(" ");
    } else {
      text = this.state.text.join(" ");
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
                    <Navs _onChooseTab={this._onChooseTab} data={data} />
                  </Col>
                  <Col xs={8}>
                    <Tabs
                      _onClickChooseAll={this._onClickChooseAll}
                      _onClickClearAll={this._onClickClearAll}
                      _onBoxChange={this._onBoxChange}
                      data={data}
                    />
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
